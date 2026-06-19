import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { CheckCircle, Clock, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Dostupni 0-24"
      title="Vaš pouzdan vodoinstalater u Zagrebu"
      description="Brze, profesionalne i povoljne vodoinstalaterske usluge. Instalacije Krznarić rješava sve kvarove brzo i efikasno."
      primaryButton={{
        text: "Nazovi odmah",
        href: "tel:098208195",
      }}
      secondaryButton={{
        text: "Pošalji upit",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="O nama"
      title="Više od 20 godina iskustva"
      description="Instalacije Krznarić su obiteljski obrt s tradicijom. Naš cilj je pružiti vrhunsku uslugu koja će osigurati dugotrajnost vaših instalacija i mir u vašem domu."
      primaryButton={{
        text: "Saznaj više",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/sanitary-technician-lying-sink_23-2147772221.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCarousel
      tag="Naše usluge"
      title="Što sve radimo?"
      description="Od hitnih intervencija do kompletnih adaptacija, pokrivamo sve aspekte vodoinstalaterskih radova."
      items={[
        {
          title: "Hitne intervencije",
          description: "Dostupni smo 0-24h za hitne popravke curenja i kvarova.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/male-hands-with-wrench-turning-off-valves_169016-53780.jpg",
        },
        {
          title: "Adaptacije kupaonica",
          description: "Kompletna montaža sanitarija i instalacija po principu ključ u ruke.",
          buttonIcon: "CheckCircle",
          imageSrc: "http://img.b2bpic.net/free-photo/matte-black-kitchen-faucet-sink-with-drying-rack-blue-kitchen-minimal-interior_169016-69329.jpg",
        },
        {
          title: "Održavanje instalacija",
          description: "Redovno održavanje cijevi i provjera funkcionalnosti sustava.",
          buttonIcon: "Shield",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg",
        },
        {
          title: "Odštopavanje odvoda",
          description: "Brzo i efikasno odštopavanje odvoda najmodernijim metodama.",
          buttonIcon: "ArrowRight",
          imageSrc: "http://img.b2bpic.net/free-photo/flexible-connector-different-wrenches_23-2147772264.jpg",
        },
        {
          title: "Montaža bojlera",
          description: "Stručna ugradnja i servis svih vrsta bojlera.",
          buttonIcon: "Award",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990680.jpg",
        },
        {
          title: "Instalacija vodovoda",
          description: "Polaganje novih instalacija vode za stambene prostore.",
          buttonIcon: "Star",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-as-plumber_23-2150746391.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Recenzije"
      title="Što kažu naši klijenti"
      description="Zadovoljstvo naših klijenata nam je na prvom mjestu."
      testimonials={[
        {
          name: "Filip Kurtić",
          role: "Klijent",
          quote: "Sve super, odlično odrađen posao, drži se dogovora.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-middle-aged-man-with-beard-hairstyle-dressed-elegant-formal-suit-textured-dark-background-studio_613910-19909.jpg",
        },
        {
          name: "Mihael Hacmanjek",
          role: "Klijent",
          quote: "Svaka čast! Pristojni i uredni. Preporučam!",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-miniature-his-future-home_1149-759.jpg",
        },
        {
          name: "Ivana Horvat",
          role: "Klijent",
          quote: "Brzi odaziv i kvalitetna usluga, sve pohvale.",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-word-customer_53876-30892.jpg",
        },
        {
          name: "Marko Perić",
          role: "Klijent",
          quote: "Instalacije Krznarić su mi riješile hitan kvar u nedjelju.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sensual-curly-woman-smiles-pleasantly-holds-chin-expresses-positive-emotions-keeps-smiling-shows-white-teeth-wears-pink-knitted-sweater-has-beauty-face-healthy-skin-curly-hair_273609-42620.jpg",
        },
        {
          name: "Ana Kovač",
          role: "Klijent",
          quote: "Izuzetno profesionalni i pedantni radnici.",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-image-optimistic-energetic-mature-businesswoman-with-short-blonde-hair-posing-stylish-office-interior-with-arms-folded-her-chest-looking-camera-with-confident-happy-smile_343059-2245.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Pitanja"
      title="Česta pitanja"
      description="Evo odgovora na neka od vaših pitanja."
      items={[
        {
          question: "Dostupni ste 0-24?",
          answer: "Da, za hitne intervencije smo dostupni non-stop.",
        },
        {
          question: "Radite li adaptacije?",
          answer: "Da, radimo kompletne adaptacije kupaonica.",
        },
        {
          question: "Kako dogovoriti termin?",
          answer: "Jednostavno nas nazovite na broj 098 208 195.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Povjerenje"
      title="Radimo s provjerenim partnerima"
      names={[
        "Geberit",
        "Grohe",
        "Vaillant",
        "Grundfos",
        "VIEGA",
        "Herz",
        "Bosch",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Rezultati"
      title="Brojke koje govore za nas"
      metrics={[
        {
          icon: CheckCircle,
          title: "Zadovoljnih klijenata",
          value: "1000+",
        },
        {
          icon: Clock,
          title: "Godina iskustva",
          value: "20+",
        },
        {
          icon: Zap,
          title: "Hitnih intervencija",
          value: "500+",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Kontakt"
      text="Trebate vodoinstalatera u Zagrebu? Nazovite nas odmah za besplatnu procjenu."
      primaryButton={{
        text: "098 208 195",
        href: "tel:098208195",
      }}
      secondaryButton={{
        text: "Pošalji email",
        href: "mailto:info@krznaric.hr",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
