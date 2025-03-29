import { ThreeDMarquee } from "@/components/ui/3d-hero";
import { ministries } from "@/lib/data/ministries";
import MinistryContainer from "./ministry-container";

export default function Ministries({ images }: { images: string[] }) {
  return (
    <div className="py-32">
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
