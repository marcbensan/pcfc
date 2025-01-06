export default function VisionHero(): JSX.Element {
  return (
    <div className="h-full bg-tertiarypcfc px-6 py-16 md:p-20">
      <div className="relative flex flex-col space-y-8 md:space-y-24">
        <div className="flex animate-fadeUp flex-col">
          <p className="text-center font-monaSans text-[80px] font-extrabold italic text-transparent text-stroke-4 text-stroke-black md:text-start md:text-[200px]">
            OUR
          </p>
          <p className="mt-[-40px] text-center font-monaSans text-[80px] font-extrabold italic text-transparent text-stroke-4 text-stroke-black md:mt-[-120px] md:text-start md:text-[200px]">
            VISION
          </p>
        </div>
        <div className="flex items-end justify-end">
          <p className="flex text-center font-barlow text-2xl text-primarypcfc md:max-w-[70%] md:items-end md:text-end md:text-5xl">
            “For people to belong to a family, where they can grow in faith,
            build God’s kingdom and lift the name of Jesus above our city
            reaching all those in it.”
          </p>
        </div>
      </div>
    </div>
  );
}
