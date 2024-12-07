"use client";

import { Button } from "@/components/button-catalyst";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function About(): JSX.Element {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="space-y-20">
      {/* BG IMAGE */}
      <div className="h-screen bg-ttuPattern bg-cover bg-center bg-no-repeat">
        <div className="animate-fadeUp flex flex-col space-y-8 p-8">
          <p className="w-3/4 max-w-[800px] font-orbitron text-[50px] font-bold text-white md:text-[70px]">
            Praise Christian Family Church
          </p>
          <div className="flex w-1/2 flex-col gap-y-4 md:w-full md:flex-row md:gap-x-4">
            <Button outline className="cursor-pointer !p-3">
              <PlayIcon className="font-homenaje text-white" />
              Watch Online
            </Button>
            <Button color="white" className="w-36 cursor-pointer !p-3">
              Visit Us
            </Button>
          </div>
        </div>
      </div>

      {/* VISION HERO */}
      <div className="h-full p-4 md:p-8">
        <div className="bg-quotes flex items-center justify-center rounded-sm bg-cover drop-shadow-lg md:h-full md:rounded-2xl">
          <div className="my-8 flex flex-col space-y-8 p-10 md:my-0 md:p-32 lg:p-52">
            <p
              ref={ref}
              className={`${inView && "animate-fadeUp"} font-homenaje text-[24px] italic text-zinc-500 md:text-[40px]`}
            >
              {`For people to belong to a family, to grow in faith, and build God's kingdom, so that Jesus' name will reign above our city reaching all those in it.`}
            </p>
            <span className="animate-fadeUp w-3/4 flex-grow border-b-4 border-zinc-300" />
            <p className="font-homenaje animate-fadeUp text-sm text-zinc-500">
              The Vision
            </p>
          </div>
        </div>
      </div>

      {/* VISIT US */}
      <section className="diagonal-section relative z-[1] h-[800px] bg-zinc-900">
        <div className="mx-8 flex w-[calc(100%_-_3rem)] max-w-3xl flex-col space-y-8 pt-16">
          <div
            ref={ref}
            className={`${inView && "animate-fadeUp"}`}
            id="visit-us"
          >
            <p
              className={`font-orbitron text-[24px] font-bold text-white md:text-[60px]`}
            >
              Visit PCFC
            </p>
            <p
              className={`font-homenaje font-md text-[24px] text-white md:text-[24px]`}
            >
              Join us in one of our two services every Sunday
            </p>
          </div>
          <div className="flex flex-row">
            <Carousel className="ml-12 size-[400px]">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    className="rounded-lg"
                    alt="images"
                    width={400}
                    height={400}
                    src="/quotes.jpg"
                  />
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
