import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function VideosHero({
  videos,
}: Readonly<{ videos: YoutubeApiResponse }>): JSX.Element {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center space-y-8 bg-primarypcfc py-16 md:space-y-16">
      <div className="w-full md:space-y-8 lg:max-w-screen-2xl">
        <Carousel className="w-full px-4">
          <CarouselContent className="flex space-x-6 md:space-x-4">
            {videos.items.map((item) => (
              <CarouselItem
                key={item.id}
                className="group/card text-bottom ml-1 h-[300px] w-[20px] rounded-lg bg-cover bg-center shadow-2xl hover:bg-gray-600 hover:opacity-70 md:h-[300px] md:w-[600px] md:basis-1/2 md:rounded-2xl lg:basis-1/3"
                style={{
                  backgroundImage: `url(http://img.youtube.com/vi/${item.snippet.resourceId.videoId}/hqdefault.jpg)`,
                }}
              >
                <p className="z-10 line-clamp-1 p-2 pr-6 text-xl font-bold text-gray-50 md:text-2xl">
                  {item.snippet.title}
                </p>
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
