"use client";

import { Button } from "@/components/button-catalyst";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ClockIcon, MapPinIcon, PlayIcon } from "@heroicons/react/24/outline";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function About(): JSX.Element {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const imageCarousel = [
    {
      id: 1,
      img: "/visit-carousel/1.jpg",
    },
    {
      id: 2,
      img: "/visit-carousel/2.jpg",
    },
    {
      id: 3,
      img: "/visit-carousel/3.jpg",
    },
    {
      id: 4,
      img: "/visit-carousel/4.jpg",
    },
    {
      id: 5,
      img: "/visit-carousel/5.jpg",
    },
  ];

  return (
    <div>
      {/* BG IMAGE */}
      <div className="bg-cente flex h-screen items-center justify-center bg-ttuPattern bg-cover opacity-90 md:h-[800px]">
        <div className="flex h-full animate-fadeUp flex-col items-center justify-center">
          <p className="whitespace-nowrap text-center font-monaSans text-[80px] font-bold text-white md:text-[200px]">
            THIS IS
          </p>
          <p className="mt-[-30] text-center font-monaSans text-[80px] font-bold text-white md:mt-[-120px] md:text-[200px]">
            FAMILY
          </p>
          <p className="whitespace-nowrap text-center font-monaSans text-[30px] italic text-white md:text-[50px]">
            where you are loved
          </p>
        </div>
      </div>

      {/* TIMES HERO */}
      <div className="bg-tertiarypcfc flex h-full justify-center px-32">
        <div className="flex flex-col space-y-8 py-8 font-monaSans md:max-w-[1000px] md:flex-row md:space-x-24 md:space-y-0">
          {/* TIMES */}
          <div className="flex flex-col items-center">
            <ClockIcon className="size-20 text-black" />
            <p className="whitespace-nowrap text-[24px] font-extrabold">
              SERVICE TIMES
            </p>
            <p className="font-bold">10:00 AM</p>
            <p className="font-bold">11:58 AM</p>
          </div>

          {/* WATCH LIVE BUTTON */}
          <div className="order-3 flex flex-grow items-center justify-center md:order-2">
            <Button className="w-full min-w-[150px] max-w-[300px] flex-grow cursor-pointer !p-3">
              <PlayIcon className="whitespace-nowrap font-homenaje text-white" />
              Watch Online
            </Button>
          </div>

          {/* LOCATION */}
          <div className="order-2 flex flex-col items-center md:order-3">
            <MapPinIcon className="size-20 text-black" />
            <p className="text-[24px] font-extrabold">OUR SITE</p>
            <p className="whitespace-nowrap font-bold">781 WARDEN AVENUE</p>
            <p className="whitespace-nowrap font-bold">SCARBOROUGH, ON</p>
          </div>
        </div>
      </div>

      {/* VISION HERO */}
      <div className="h-full p-4 md:p-8">
        <div className="flex items-center justify-center rounded-sm bg-quotes bg-cover drop-shadow-lg md:h-full md:rounded-2xl">
          <div className="my-8 flex flex-col space-y-8 p-10 md:my-0 md:p-32 lg:p-52">
            <p
              ref={ref}
              className={`${inView && "animate-fadeUp"} font-homenaje text-[24px] italic text-zinc-500 md:text-[40px]`}
            >
              {`For people to belong to a family, to grow in faith, and build God's kingdom, so that Jesus' name will reign above our city reaching all those in it.`}
            </p>
            <span className="w-3/4 flex-grow animate-fadeUp border-b-4 border-zinc-300" />
            <p className="animate-fadeUp font-homenaje text-sm text-zinc-500">
              The Vision
            </p>
          </div>
        </div>
      </div>

      {/* VISIT US */}
      <section className="diagonal-section relative z-[1] h-[800px] bg-zinc-900">
        <div className="mx-8 flex max-w-3xl flex-col space-y-8 pt-16">
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
              className={`font-md font-homenaje text-[24px] text-white md:text-[24px]`}
            >
              Join us in one of our two services every Sunday
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <Carousel
              className="w-full drop-shadow-lg md:size-[500px]"
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {imageCarousel.map((image) => (
                  <CarouselItem key={image.id}>
                    <Image
                      className="rounded-lg object-cover md:h-[400px]"
                      alt="images"
                      width={500}
                      height={500}
                      src={image.img}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
