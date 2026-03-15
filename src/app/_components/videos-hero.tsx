"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Eye, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VideosHero({
  videos,
}: Readonly<{ videos: YoutubeApiResponse }>): JSX.Element {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return (
    <div className="relative w-full bg-primarypcfc py-16 md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-monaSans text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            WATCH OUR LATEST VIDEOS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
            Stay connected with our latest sermons, teachings, and church events
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-white/80"></div>
        </div>

        {/* Videos Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4 md:-ml-6">
              {videos?.items?.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="cursor-pointer pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
                >
                  <Link
                    href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                    target="_blank"
                  >
                    <div className="hover:shadow-3xl group relative overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300">
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={`https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/hqdefault.jpg`}
                          width={500}
                          height={500}
                          alt={item.snippet.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                              <Play
                                className="ml-1 h-6 w-6 text-primarypcfc"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="p-4 md:p-6">
                        <h3 className="mb-2 line-clamp-1 font-monaSans text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primarypcfc">
                          {truncateTitle(item.snippet.title)}
                        </h3>

                        <div className="flex items-center justify-between text-sm text-slate-600">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>Watch now</span>
                          </div>
                          <span>{formatDate(item.snippet.publishedAt)}</span>
                        </div>

                        {/* Watch Button */}
                        <Button className="mt-4 w-full rounded-lg bg-primarypcfc px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-primarypcfc/90 hover:shadow-lg">
                          Watch Video
                        </Button>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href={"https://www.youtube.com/@pcfc4square"}
            target="_blank"
            className="bg-secondarypcfc inline-flex items-center space-x-2 rounded-lg px-6 py-3 font-semibold text-primarypcfc shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white/95 hover:shadow-xl"
          >
            <span>View All Videos</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
