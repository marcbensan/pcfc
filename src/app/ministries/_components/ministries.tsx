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
    <div className="py-40">
      <p className="pb-12 text-center font-monaSans text-5xl font-bold md:text-8xl">
        OUR MINISTRIES
      </p>
      <div className="flex flex-col space-y-32 px-4 md:px-12">
        <div className="my-10 flex w-full items-center justify-center rounded-3xl bg-tertiarypcfc p-2 ring-1 ring-tertiarypcfc dark:bg-neutral-800">
          <ThreeDMarquee images={images} />
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
  );
}
