import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Image from "next/image";


export default function Home() {
  return (
    <main className="pt-10">
      <Hero />
      <About />
      <Feature />
      <Services /> 
      <Contact />
    </main>
  );
}
