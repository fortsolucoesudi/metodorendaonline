import { Benefits } from "../components/landing/benefits";
import { RobotSquad } from "../components/landing/robot-squad";
import { Services } from "../components/landing/services";
import { Contact } from "../components/landing/contact";
import { FloatingWhatsApp } from "../components/landing/floating-whatsapp";
import { Footer } from "../components/landing/footer";
import { Header } from "../components/landing/header";
import { Hero } from "../components/landing/hero";
import { HowItWorks } from "../components/landing/how-it-works";
import { Testimonials } from "../components/landing/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <RobotSquad />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
