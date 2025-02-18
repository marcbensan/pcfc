import Image from "next/image";

export default function Mission(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center space-x-24 md:h-[1000px] md:flex-row md:px-24">
      <div className="flex h-full w-full max-w-[1000px] animate-fadeUp items-center justify-center">
        <p className="text-start font-barlow font-bold italic text-black md:text-8xl md:text-[80px]">
          To see those that God loves, come back to His family
        </p>
      </div>
      <div>
        <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full md:h-[600px] md:w-[600px]">
          <Image
            alt="mission-img"
            src="/mission.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
