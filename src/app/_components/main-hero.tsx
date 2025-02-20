"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "framer-motion";

export default function MainHero(): JSX.Element {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const wordCarousel = [
    {
      id: 1,
      word: "loved",
    },
    {
      id: 2,
      word: "accepted",
    },
    {
      id: 3,
      word: "prayed for",
    },
  ];

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
        <div className="flex flex-row space-x-3">
          <p className="whitespace-nowrap text-center font-monaSans text-[30px] italic text-white md:text-[50px]">
            where you are
          </p>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs"
          >
            <CarouselContent className="h-[100px]">
              {wordCarousel.map((word) => (
                <CarouselItem key={word.id} className="md:basis-1/1">
                  <p className="whitespace-nowrap text-start font-monaSans text-[30px] italic text-white md:text-[50px]">
                    {word.word}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
