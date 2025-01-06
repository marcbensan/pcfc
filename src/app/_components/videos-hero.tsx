import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function VideosHero({
  videos,
}: Readonly<{ videos: YoutubeApiResponse }>): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-8 bg-primarypcfc py-16 md:space-y-16">
      <div className="max-w-screen-2xl px-4 md:space-y-8">
        <Carousel className="w-full">
          <CarouselContent className="flex space-x-4">
            {videos.items.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
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
  );
}
