import Navigation from "../components/Navigation";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactHero />
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <MapSection />
      <Footer />
    </main>
  );
}
