import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRODUCTS: Record<
  string,
  { name: string; description: string; price: number }
> = {
  "rfis-2l": {
    name: "RFIS 2L Fire Extinguisher",
    description:
      "Compact 2-litre lithium fire extinguisher — ideal for EVs, small battery rooms, and personal use.",
    price: 14900,
  },
  "rfis-6l": {
    name: "RFIS 6L Fire Extinguisher",
    description:
      "Standard 6-litre lithium fire extinguisher — built for server rooms, charging bays, and commercial facilities.",
    price: 29900,
  },
  "rfis-9l": {
    name: "RFIS 9L Fire Extinguisher",
    description:
      "Heavy-duty 9-litre lithium fire extinguisher — engineered for BESS containers, data centers, and industrial environments.",
    price: 44900,
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity = 1 } = body;

    const product = PRODUCTS[productId];
    if (!product) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    if (quantity < 1 || quantity > 50) {
      return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `[PREORDER] ${product.name}`,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity,
        },
      ],
      metadata: {
        productId,
        preorder: "true",
      },
      custom_text: {
        submit: {
          message:
            "This is a preorder. Your card will be charged now and your extinguisher will ship when production is complete. We will contact you with estimated delivery timeline.",
        },
      },
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
