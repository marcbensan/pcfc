"use server";

export async function getYoutubeVideos(): Promise<YoutubeApiResponse> {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUHl6Rck1OKCzzxn3YiXAo_g&key=${process.env.YOUTUBE_API_KEY}`,
  );

  if (!res.ok) console.error("Something went wrong");

  return await res.json();
}
