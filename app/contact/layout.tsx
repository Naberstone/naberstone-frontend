import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Naberstone Safety Solutions",
  description:
    "Start your RFIS deployment pathway. Request a technical overview, schedule a strategic safety architecture call, or discuss integration with Naberstone.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
