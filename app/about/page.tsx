import React from 'react';
import Lottie from 'lottie-react';
import Image from 'next/image'
import { HeroHighlight } from '@/components/ui/hero-heighlight';

const AboutPage = () => {
  return (
    <div className="p-5">
          <HeroHighlight>
    <div className="about-page w-screen py-10 px-4 md:px-0 flex justify-center items-center h-screen">
      <div className=" flex max-w-4xl ">
        <div className=" mr-8">
        <p className="bg-yellow-500 [writing-mode:vertical-lr] font-bold font-mono text-5xl">About<span className=" bg-red-700 text-black font-bold"> Me </span> </p>
        </div>
          <div>
          <p className="text-2xl mb-4">
  A passionate Full Stack Developer with a focus on backend development. Although my background primarily lies in backend technologies
  <Image src="/c-sharp.png" width={30} height={30} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>
  <Image src="/sql.png" width={30} height={30} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>
  <Image src="/java.png" width={30} height={30} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>,
  my curiosity and enthusiasm led me to explore frontend development as well, and I've built a few projects to enhance my skills in this area.
</p>

<p className="text-2xl mb-4">
  I thrive on challenges and enjoy solving complex problems, whether it's designing efficient algorithms for backend processes or crafting engaging user interfaces on the frontend. My journey in software development has been one of continuous learning and growth, and I'm always eager to explore new technologies and expand my skill set.
  <Image src="/html.png" width={25} height={25} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>      
  <Image src="/javascript.png" width={25} height={25} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>      
  <Image src="/mysql.png" width={25} height={25} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>      
  <Image src="/css.png" width={25} height={25} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>      
  <Image src="/react.png" width={25} height={25} alt="" className="contrast-100 hover:contrast-150 ease-in-out duration-500 inline-block"/>....                      
</p>
            <p className="text-2xl mb-4">
              When I'm not coding, you can find me exploring the latest developments in the tech world, playing video games, or enjoying outdoor adventures. Feel free to reach out if you'd like to collaborate on a project or just chat about technology! 😊✨🚀
            </p>
          </div>
      </div>
    </div>
    </HeroHighlight>
    </div>
  );
};

export default AboutPage;