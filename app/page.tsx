import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
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
      </div>
    </>
  );
}
