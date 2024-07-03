import About from "@/components/About";
import Companies from "@/components/Companies";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import Contact from "@/components/Contact";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
    <Hero />
    <Stats/>
    <Featured />
    <About/>
    <Companies/>
    <WhatWeDo/>
    <Process/>
    <Team/>
    <Contact />
    </div>
  );
}
