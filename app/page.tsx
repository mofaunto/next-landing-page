import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='px-5 lg:container lg:px-20 mx-auto '>
        <Features />
        <FAQ />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
