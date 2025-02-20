import Image from "next/image";

export default function Mission(): JSX.Element {
  return (
    <div className="my-24 flex flex-col-reverse items-center justify-center px-8 md:my-0 md:h-[1000px] md:flex-row md:space-x-24 md:px-24">
      <div className="flex h-full w-full max-w-[1000px] animate-fadeUp items-center justify-center">
        <p className="my-8 text-center font-barlow text-5xl font-bold italic text-black md:my-0 md:text-start md:text-8xl md:text-[80px]">
          To see those that God loves, come back to His family
        </p>
      </div>
      <div>
        <div className="flex h-[250px] w-[250px] items-center justify-center overflow-hidden rounded-full md:h-[600px] md:w-[600px]">
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
