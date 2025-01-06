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

export default function About({
  videos,
}: Readonly<{ videos: YoutubeApiResponse }>): JSX.Element {
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
    <>
      {/* BG IMAGE */}
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

      {/* TIMES HERO */}
      <div className="flex h-full w-full justify-center bg-tertiarypcfc px-24">
        <div className="flex w-full flex-col justify-between space-y-8 py-12 font-monaSans md:flex-row md:space-y-0">
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
          <div className="order-3 flex flex-grow items-center justify-center px-4 font-monaSans md:order-2 md:w-1/3">
            <Button
              href="https://www.youtube.com/@pcfc4square/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-w-[200px] max-w-[300px] flex-grow cursor-pointer !rounded-full !p-4"
            >
              <PlayIcon className="whitespace-nowrap text-white" />
              <p className="whitespace-nowrap !font-monaSans">WATCH ONLINE</p>
            </Button>
          </div>

          {/* LOCATION */}
          <div className="order-2 flex flex-col items-center px-4 md:order-3 md:w-1/3">
            <MapPinIcon className="size-24 text-black" />
            <p className="whitespace-nowrap text-3xl font-extrabold">
              OUR SITE
            </p>
            <p className="whitespace-nowrap font-bold">781 WARDEN AVENUE</p>
            <p className="whitespace-nowrap font-bold">SCARBOROUGH, ON</p>
          </div>
        </div>
      </div>

      {/* VIDOES HERO */}

      <div className="flex h-full w-full flex-col items-center justify-center space-y-8 bg-primarypcfc py-16 md:space-y-16">
        <div className="max-w-screen-2xl px-4 md:space-y-8">
          <Carousel className="w-full">
            <CarouselContent className="flex space-x-4">
              {videos.items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="images"
                      width={1000}
                      height={480}
                      src={`http://img.youtube.com/vi/${item.snippet.resourceId.videoId}/mqdefault.jpg`}
                      className="rounded-xl"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <p className="whitespace-nowrap text-center text-xl font-bold text-white md:text-3xl">
          WATCH OUR LATEST VIDEOS
        </p>
      </div>

      {/* VISION HERO */}
      <div className="h-full bg-tertiarypcfc px-6 py-16 md:p-20">
        <div className="relative flex flex-col space-y-8 md:space-y-24">
          <div className="flex flex-col">
            <p className="text-center font-monaSans text-[80px] font-extrabold italic text-transparent text-stroke-4 text-stroke-black md:text-start md:text-[200px]">
              OUR
            </p>
            <p className="mt-[-40px] text-center font-monaSans text-[80px] font-extrabold italic text-transparent text-stroke-4 text-stroke-black md:mt-[-120px] md:text-start md:text-[200px]">
              VISION
            </p>
          </div>
          <div className="flex items-end justify-end">
            <p className="flex text-center font-barlow text-2xl text-primarypcfc md:max-w-[70%] md:items-end md:text-end md:text-5xl">
              “For people to belong to a family, where they can grow in faith,
              build God’s kingdom and lift the name of Jesus above our city
              reaching all those in it.”
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex h-full w-full flex-col justify-center space-y-8 bg-primarypcfc py-16 md:space-y-16">
        <p className="whitespace-nowrap text-center text-3xl font-bold text-white md:text-5xl">
          GET IN TOUCH
        </p>
        <div className="grid grid-rows-2 items-start gap-8 px-8 md:grid-cols-2 md:grid-rows-1 md:px-24">
          <div className="space-y-4 md:space-y-8">
            <div className="flex flex-row items-center space-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="45"
                  height="45"
                >
                  <path
                    fill="white"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </div>
              <p className="font-barlow text-3xl text-white">@pcfctoronto</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="40"
                  height="40"
                >
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
