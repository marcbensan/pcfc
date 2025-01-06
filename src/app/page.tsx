import { getYoutubeVideos } from "@/actions/youtube";
import About from "./_components/home";

export default async function Home() {
  const data = await getYoutubeVideos();
  return (
    <>
      <About videos={data} />
    </>
  );
}
