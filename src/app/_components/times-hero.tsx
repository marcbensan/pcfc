import { Button } from "@/components/button-catalyst";
import { ClockIcon, MapPinIcon, PlayIcon } from "@heroicons/react/24/outline";

export default function TimesHero(): JSX.Element {
  return (
    <div className="flex h-full w-full justify-center bg-tertiarypcfc px-24">
      <div className="flex w-full flex-col justify-between space-y-8 py-12 font-monaSans md:flex-row md:space-y-0">
        {/* TIMES */}
        <div className="flex flex-col items-center px-4 md:w-1/3">
          <ClockIcon className="size-24 text-black" />
          <p className="whitespace-nowrap text-3xl font-extrabold">
            SERVICE TIMES
          </p>
          <p className="font-bold">10:00 AM</p>
          <p className="font-bold">11:58 AM</p>
        </div>

        {/* WATCH LIVE BUTTON */}
        <div className="order-3 flex flex-grow items-center justify-center px-4 font-monaSans md:order-2 md:w-1/3">
          <Button
            href="https://www.youtube.com/@pcfc4square/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-w-[200px] max-w-[300px] flex-grow cursor-pointer !rounded-full !p-4"
          >
            <PlayIcon className="whitespace-nowrap text-white" />
            <p className="whitespace-nowrap !font-monaSans">WATCH ONLINE</p>
          </Button>
        </div>

        {/* LOCATION */}
        <div className="order-2 flex flex-col items-center px-4 md:order-3 md:w-1/3">
          <MapPinIcon className="size-24 text-black" />
          <p className="whitespace-nowrap text-3xl font-extrabold">OUR SITE</p>
          <p className="whitespace-nowrap font-bold">781 WARDEN AVENUE</p>
          <p className="whitespace-nowrap font-bold">SCARBOROUGH, ON</p>
        </div>
      </div>
    </div>
  );
}
