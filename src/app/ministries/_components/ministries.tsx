"use client";

import { ThreeDMarquee } from "@/components/ui/3d-hero";
import { ministries } from "@/lib/data/ministries";
import MinistryContainer from "./ministry-container";

export default function Ministries() {
  const images = [
    "/ministries/_MG_6051.jpg",
    "/ministries/_MG_6060.jpg",
    "/ministries/_MG_9621-Enhanced-NR.jpg",
    "/ministries/_MG_9646-Enhanced-NR.jpg",
    "/ministries/DSC_1284.JPG",
    "/ministries/DSC_1479.JPG",
    "/ministries/DSC_1629.jpg",
    "/ministries/DSC_2335.jpg",
    "/ministries/DSC_2583.jpg",
    "/ministries/DSC_3206.jpg",
    "/ministries/DSC_3595.JPG",
    "/ministries/DSC_3640.JPG",
    "/ministries/DSC_3666.JPG",
    "/ministries/DSC_3686.JPG",
    "/ministries/DSC_3755.JPG",
    "/ministries/DSC_3782.JPG",
    "/ministries/DSC_3935.JPG",
    "/ministries/DSC_8639.jpg",
    "/ministries/DSC_9601.JPG",
    "/ministries/DSC_9717.JPG",
    "/ministries/DSC00596.JPG",
    "/ministries/DSC05041.JPG",
    "/ministries/DSC05126.JPG",
    "/ministries/DSC05239.JPG",
    "/ministries/DSC05313.JPG",
    "/ministries/DSC05331.JPG",
    "/ministries/DSC05432.jpg",
    "/ministries/DSC05449.jpg",
    "/ministries/DSC05457.jpg",
    "/ministries/DSC05532.jpg",
    "/ministries/DSC05934.jpg",
    "/ministries/DSC06065.jpg",
    "/ministries/DSC06125.jpg",
    "/ministries/DSC06317.JPG",
    "/ministries/DSC09825.JPG",
    "/ministries/IMG_5937.JPG",
    "/ministries/IMG_9426.jpg",
  ];
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-8 md:px-0">
        <h2 className="relative z-20 mx-auto flex max-w-4xl flex-col space-y-4 text-balance text-center font-barlow text-4xl font-bold text-white lg:text-7xl">
          OUR LIST OF
          <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
            MINISTRIES
          </span>
        </h2>
        <div className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
          <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
            Each ministry is designed to provide opportunities for individuals
            to connect, grow in their faith, and make a meaningful impact in the
            lives of others.
          </p>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>

      <div className="py-24">
        <div className="flex flex-col space-y-40 px-4 md:px-12">
          {/* TEXT */}
          <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-orange-100 px-8 py-24 font-monaSans shadow-sm md:px-32 lg:flex-row lg:space-x-4 lg:space-y-0">
            <p className="font-barlow text-7xl font-bold">FOR GOD.</p>
            <p className="w-full">
              Praise Christian Family Church was born out of a deep desire to
              build a local church that reflects the love and grace of Jesus
              Christ. Rooted in a passion for community and discipleship, our
              church exists to gather believers in worship and to equip them to
              share His light and love with the world. We are a Christ-centered
              church, committed to fostering a family of faith that grows
              together, serves together, and shines His hope throughout our city
              and beyond.
            </p>
          </div>
          <div className="relative flex items-center py-5">
            <div className="hidden flex-grow border-4 border-t border-zinc-600 md:flex"></div>
            <p className="mx-2 flex-shrink text-center font-barlow text-4xl font-semibold md:text-7xl lg:mx-8">
              MINISTRIES YOU CAN JOIN
            </p>
            <div className="hidden flex-grow border-4 border-t border-zinc-600 md:block"></div>
          </div>

          <div className="grid place-items-center gap-y-32 md:grid-cols-3 md:px-32">
            {ministries.map((ministry) => (
              <MinistryContainer
                key={ministry.ministry}
                icon={<ministry.icon />}
                ministry={ministry.ministry}
                description={ministry.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
