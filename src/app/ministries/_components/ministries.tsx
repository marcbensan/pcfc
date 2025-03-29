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
      <div className="flex flex-col space-y-40 px-4 md:px-12">
        {/* 3D COMPONENT */}
        <div className="my-10 flex w-full items-center justify-center rounded-3xl bg-tertiarypcfc p-2 ring-1 ring-tertiarypcfc dark:bg-neutral-800">
          <ThreeDMarquee images={images} />
        </div>
        {/* TEXT */}
        <div className="flex w-full flex-row items-center space-x-4 px-32 font-monaSans">
          <p className="font-barlow text-7xl font-bold">FOR GOD.</p>
          <p className="">
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
          <div className="flex-grow border-4 border-t border-zinc-600"></div>
          <p className="mx-8 flex-shrink text-center font-barlow text-4xl font-semibold md:text-7xl">
            SOME MINISTRIES YOU CAN JOIN
          </p>
          <div className="flex-grow border-4 border-t border-zinc-600"></div>
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
