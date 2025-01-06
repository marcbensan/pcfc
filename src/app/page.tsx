import { getYoutubeVideos } from "@/actions/youtube";
import MainHero from "./_components/main-hero";
import TimesHero from "./_components/times-hero";
import VideosHero from "./_components/videos-hero";
import VisionHero from "./_components/vision-hero";

export default async function Home() {
  const youtubeVideos = await getYoutubeVideos();
  return (
    <>
      <MainHero />
      <TimesHero />
      <VideosHero videos={youtubeVideos} />
      <VisionHero />
    </>
  );
}
