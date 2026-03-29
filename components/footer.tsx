import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "Category", href: "/category" },
      { label: "Platform", href: "/platform" },
      { label: "Applications", href: "/applications" },
    ],
  },
  {
    heading: "Validation",
    links: [
      { label: "Standards", href: "/standards" },
      { label: "UL 9540A Context", href: "/standards#ul9540a" },
      { label: "NFPA 855", href: "/standards#nfpa855" },
    ],
  },
  {
    heading: "Engagement",
    links: [
      { label: "Partnerships", href: "/partnerships" },
      { label: "OEM Integration", href: "/partnerships#oem" },
      { label: "Federal Pathways", href: "/partnerships#federal" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Technical Overview", href: "/contact#overview" },
      { label: "Integration Discussion", href: "/contact#integration" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block">
              <Image
                src="/images/naberstone-tm-logo-white.png"
                alt="Naberstone"
                width={220}
                height={33}
                className="h-5 lg:h-7 w-auto"
              />
            </Link>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Naberstone. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 tracking-wider">
            Built for the electrified era.
          </p>
        </div>
      </div>
    </footer>
  );
}
