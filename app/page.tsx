import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='px-[20px] lg:container lg:px-20 mx-auto '>
        <Features />
      </div>
    </>
  );
}
