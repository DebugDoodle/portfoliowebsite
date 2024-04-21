'use client'
import { WavyBackground } from "@/components/ui/wavy-background";
import NavigationBar from "./NavigationBar";
import Link from "next/link";
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };    
  },[]);
  return (
    <main>

      <div className=" relative">
      <WavyBackground className="max-w-4xl mx-auto pb-44 relative">
      <p className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hi I am Prajnan.
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Crafting digital symphonies with code, I orchestrate seamless experiences at the intersection of front and back-end magic.
      </p>
      </WavyBackground>
    
      </div>
    </main>
  );
}
