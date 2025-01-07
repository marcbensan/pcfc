import Image from "next/image";

export default function Mission(): JSX.Element {
  return (
    <div className="flex items-center justify-center space-x-24 px-24 md:h-[1000px]">
      <div className="flex h-full w-full max-w-[1000px] animate-fadeUp items-center justify-center">
        <p className="text-start italic font-barlow text-[80px] font-bold text-black md:text-8xl">
          To see those that God loves, come back to His family
        </p>
      </div>
      <div>
        <div className="flex h-[600px] w-[600px] items-center justify-center overflow-hidden rounded-full">
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
