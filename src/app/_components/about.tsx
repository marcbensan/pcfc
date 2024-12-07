import { Button } from "@/components/button-catalyst";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function About(): JSX.Element {
  return (
    <div className="space-y-20">
      {/* BG IMAGE */}
      <div className="h-screen bg-ttuPattern bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col space-y-8 p-8">
          <p className="w-3/4 max-w-[800px] font-orbitron text-[50px] font-bold text-white md:text-[70px]">
            Praise Christian Family Church
          </p>
          <div className="flex w-1/2 flex-col gap-y-4 md:w-full md:flex-row md:gap-x-4">
            <Button outline className="cursor-pointer !p-3">
              <PlayIcon className="font-homenaje text-white" />
              Watch Online
            </Button>
            <Button color="white" className="w-36 cursor-pointer !p-3">
              Visit Us
            </Button>
          </div>
        </div>
      </div>

      {/* VISION HERO */}
      <div className="h-full p-4 md:p-8">
        <div className="bg-quotes flex items-center justify-center rounded-sm bg-cover drop-shadow-lg md:h-full md:rounded-2xl">
          <div className="my-8 flex flex-col space-y-8 p-10 md:my-0 md:p-32 lg:p-52">
            <p className="font-homenaje text-[24px] italic text-zinc-500 md:text-[40px]">
              {`For people to belong to a family, to grow in faith, and build God's kingdon, so that Jesus' name will reign above our city reaching all those in it.`}
            </p>
            <span className="w-3/4 flex-grow border-b-4 border-zinc-300" />
            <p className="font-homenaje textsms text-zinc-500">The Vision</p>
          </div>
        </div>
      </div>

      <div className="diagonal-section my-20 h-[800px] bg-zinc-900"></div>
    </div>
  );
}
