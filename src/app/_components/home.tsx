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
      img: "/videos-carousel/1.jpg",
    },
    {
      id: 2,
      img: "/videos-carousel/2.jpg",
    },
    {
      id: 3,
      img: "/videos-carousel/3.jpg",
    },
  ];

  return (
    <div>
      {/* BG IMAGE */}
      <div className="relative flex h-screen items-center justify-center bg-ttuPattern bg-cover md:h-[800px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Add this line */}
        <div className="relative flex h-full animate-fadeUp flex-col items-center justify-center">
          <p className="whitespace-nowrap text-center font-monaSans text-[80px] font-extrabold text-white md:text-[200px]">
            THIS IS
          </p>
          <p className="mt-[-30] text-center font-monaSans text-[80px] font-extrabold text-white md:mt-[-120px] md:text-[200px]">
            FAMILY
          </p>
          <p className="whitespace-nowrap text-center font-monaSans text-[30px] italic text-white md:text-[50px]">
            where you are loved
          </p>
        </div>
      </div>

      {/* TIMES HERO */}
      <div className="flex h-full w-full justify-center bg-tertiarypcfc px-24">
        <div className="flex w-full flex-col justify-between space-y-8 py-12 font-monaSans md:flex-row md:space-y-0">
          {/* TIMES */}
          <div className="flex flex-col items-center px-4 md:w-1/3">
            <ClockIcon className="size-20 text-black" />
            <p className="whitespace-nowrap text-2xl font-extrabold">
              SERVICE TIMES
            </p>
            <p className="font-bold">10:00 AM</p>
            <p className="font-bold">11:58 AM</p>
          </div>

          {/* WATCH LIVE BUTTON */}
          <div className="order-3 flex flex-grow items-center justify-center px-4 font-monaSans md:order-2 md:w-1/3">
            <Button className="w-full min-w-[100px] max-w-[300px] flex-grow cursor-pointer !rounded-full !p-4">
              <PlayIcon className="whitespace-nowrap text-white" />
              <p className="whitespace-nowrap !font-monaSans">WATCH ONLINE</p>
            </Button>
          </div>

          {/* LOCATION */}
          <div className="order-2 flex flex-col items-center px-4 md:order-3 md:w-1/3">
            <MapPinIcon className="size-20 text-black" />
            <p className="text-[24px] font-extrabold">OUR SITE</p>
            <p className="whitespace-nowrap font-bold">781 WARDEN AVENUE</p>
            <p className="whitespace-nowrap font-bold">SCARBOROUGH, ON</p>
          </div>
        </div>
      </div>

      {/* VIDOES HERO */}
      <div className="flex h-full w-full flex-col justify-center space-y-16 bg-primarypcfc py-16">
        <Carousel className="w-full">
          <CarouselContent className="flex space-x-4">
            {imageCarousel.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  alt="images"
                  width={1000}
                  height={1000}
                  src={image.img}
                  className="rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="whitespace-nowrap text-center text-3xl font-bold text-white">
          WATCH OUR LATEST SERMONS
        </p>
      </div>

      {/* VISION HERO */}
      <div className="h-full bg-tertiarypcfc p-4 md:p-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-stroke-2 text-stroke-black whitespace-nowrap text-center font-monaSans text-[60px] font-extrabold text-transparent md:text-[100px]">
            OUR VISION
          </p>
          <p className="whitespace-nowrap text-center font-monaSans text-[24px] font-bold text-black md:text-[36px]">
            To see every person in Scarborough and beyond experience the love of
            Jesus
          </p>
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
