"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { teamMembers } from "@/lib/data/teamMembers";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <div className="mx-8 space-y-8 py-44 md:mx-24 md:space-y-16">
      <div className="flex flex-col items-center justify-center space-y-12">
        <p className="text-center font-monaSans text-6xl font-bold md:text-8xl">
          MEET THE TEAM
        </p>
        <p className="text-center font-barlow text-lg md:text-2xl">
          This is our amazing team members that makes PCFC great
        </p>
      </div>
      <Carousel
        className="w-full py-8"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex space-x-4">
          {teamMembers.map((member) => (
            <CarouselItem
              key={member.name}
              className="space-y-8 md:basis-1/2 lg:basis-1/4"
            >
              <Image
                alt="images"
                width={500}
                height={1000}
                src={member.img}
                className="rounded-3xl shadow-lg"
              />
              <p className="font-barlow text-3xl font-bold">{member.name}</p>
              <p className="font-barlow text-xl">{member.position}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center"></div>
    </div>
  );
}
