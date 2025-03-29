"use client";

import { ContainerTextFlip } from "@/components/ui/text-flip";

export default function MainHero(): JSX.Element {
  const words = ["loved", "accepted", "prayed for"];

  return (
    <div className="relative flex h-screen items-center justify-center bg-ttuPattern bg-cover md:h-[1000px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex h-full animate-fadeUp flex-col items-center justify-center">
        <p className="whitespace-nowrap text-center font-monaSans text-[80px] font-extrabold text-white md:text-[200px]">
          THIS IS
        </p>
        <p className="mt-[-30] text-center font-monaSans text-[80px] font-extrabold text-white md:mt-[-120px] md:text-[200px]">
          FAMILY
        </p>
        <div className="flex flex-row">
          <div className="whitespace-nowrap text-center font-monaSans text-xl italic text-white md:text-6xl">
            where you are <ContainerTextFlip words={words} />
          </div>
        </div>
      </div>
    </div>
  );
}
