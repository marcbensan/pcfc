"use client";

import { Button } from "@/components/button-catalyst";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
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
    <>
      {/* BG IMAGE */}
      <div className="relative flex h-screen items-center justify-center bg-ttuPattern bg-cover md:h-[800px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex h-full animate-fadeUp flex-col items-center justify-center">
          <p className="font-monaSans whitespace-nowrap text-center text-[80px] font-extrabold text-white md:text-[200px]">
            THIS IS
          </p>
          <p className="font-monaSans mt-[-30] text-center text-[80px] font-extrabold text-white md:mt-[-120px] md:text-[200px]">
            FAMILY
          </p>
          <p className="font-monaSans whitespace-nowrap text-center text-[30px] italic text-white md:text-[50px]">
            where you are loved
          </p>
        </div>
      </div>

      {/* TIMES HERO */}
      <div className="bg-tertiarypcfc flex h-full w-full justify-center px-24">
        <div className="font-monaSans flex w-full flex-col justify-between space-y-8 py-12 md:flex-row md:space-y-0">
          {/* TIMES */}
          <div className="flex flex-col items-center px-4 md:w-1/3">
            <ClockIcon className="size-24 text-black" />
            <p className="whitespace-nowrap text-3xl font-extrabold">
              SERVICE TIMES
            </p>
            <p className="font-bold">10:00 AM</p>
            <p className="font-bold">11:58 AM</p>
          </div>

          {/* WATCH LIVE BUTTON */}
          <div className="font-monaSans order-3 flex flex-grow items-center justify-center px-4 md:order-2 md:w-1/3">
            <Button className="w-full min-w-[200px] max-w-[300px] flex-grow cursor-pointer !rounded-full !p-4">
              <PlayIcon className="whitespace-nowrap text-white" />
              <p className="!font-monaSans whitespace-nowrap">WATCH ONLINE</p>
            </Button>
          </div>

          {/* LOCATION */}
          <div className="order-2 flex flex-col items-center px-4 md:order-3 md:w-1/3">
            <MapPinIcon className="size-24 text-black" />
            <p className="text-3xl4 font-extrabold">OUR SITE</p>
            <p className="whitespace-nowrap font-bold">781 WARDEN AVENUE</p>
            <p className="whitespace-nowrap font-bold">SCARBOROUGH, ON</p>
          </div>
        </div>
      </div>

      {/* VIDOES HERO */}
      <div className="bg-primarypcfc flex h-full w-full flex-col justify-center space-y-16 py-16">
        <Carousel className="w-full">
          <CarouselContent className="flex space-x-4">
            {imageCarousel.map((image) => (
              <CarouselItem
                key={image.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Image
                  alt="images"
                  width={500}
                  height={500}
                  src={image.img}
                  className="rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="whitespace-nowrap text-center text-xl font-bold text-white md:text-3xl">
          WATCH OUR LATEST SERMONS
        </p>
      </div>

      {/* VISION HERO */}
      <div className="bg-tertiarypcfc h-full px-6 py-16 md:p-20">
        <div className="relative flex flex-col space-y-8 md:space-y-24">
          <div className="flex flex-col">
            <p className="text-stroke-4 text-stroke-black font-monaSans text-center text-[80px] font-extrabold italic text-transparent md:text-start md:text-[200px]">
              OUR
            </p>
            <p className="text-stroke-4 text-stroke-black font-monaSans mt-[-40px] text-center text-[80px] font-extrabold italic text-transparent md:mt-[-120px] md:text-start md:text-[200px]">
              VISION
            </p>
          </div>
          <div className="flex items-end justify-end">
            <p className="font-barlow text-primarypcfc flex text-center text-2xl md:max-w-[70%] md:items-end md:text-end md:text-5xl">
              “For people to belong to a family, where they can grow in faith,
              build God’s kingdom and lift the name of Jesus above our city
              reaching all those in it.”
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-primarypcfc flex h-full w-full flex-col justify-center space-y-16 py-16">
        <p className="whitespace-nowrap text-center text-xl font-bold text-white md:text-5xl">
          GET IN TOUCH
        </p>
        <div className="grid grid-cols-2 items-start px-24">
          <div className="space-y-8">
            <div className="flex flex-row items-center space-x-4">
              <div className="size-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="white"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </div>
              <p className="font-barlow text-3xl text-white">@pcfctoronto</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <div className="size-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
                  ></path>
                </svg>
              </div>
              <p className="font-barlow text-3xl text-white">PCFC Toronto</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-barlow text-xl text-white">Stay Connected</p>
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
