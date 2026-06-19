import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Početna",
    "href": "#hero"
  },
  {
    "name": "O nama",
    "href": "#about"
  },
  {
    "name": "Usluge",
    "href": "#features"
  },
  {
    "name": "Recenzije",
    "href": "#testimonials"
  },
  {
    "name": "Kontakt",
    "href": "#contact"
  },
  {
    "name": "Česta pitanja",
    "href": "#faq"
  },
  {
    "name": "Iskustva",
    "href": "#social-proof"
  }
];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="aurora" heroBackground="radialGradient">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Instalacije Krznarić"
      ctaButton={{
        text: "Nazovi odmah",
        href: "tel:098208195",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Instalacije Krznarić"
      columns={[
        {
          items: [
            {
              label: "Početna",
              href: "#hero",
            },
            {
              label: "O nama",
              href: "#about",
            },
            {
              label: "Usluge",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Kontakt: 098 208 195",
              href: "tel:098208195",
            },
            {
              label: "Adresa: Kačićeva 3, Zagreb",
              href: "#",
            },
            {
              label: "Radno vrijeme: 0-24",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
