import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function ConnectGroup(): JSX.Element {
  return (
    <div className="mx-4 space-y-24 py-32 md:px-24">
      <p className="font-monaSans text-5xl font-bold  md:max-w-[80%] md:text-8xl">
        JOIN A CONNECT GROUP
      </p>
      <div className="flex flex-col space-y-16 md:flex-row md:space-x-16 md:space-y-0">
        <Image width={1000} height={1000} alt="placeholder" src={imgLink} />
        <div className="flex flex-col space-y-8 font-monaSans">
          <p className="text-2xl font-bold">WHAT IS A CONNECT GROUP</p>
          <p className="font-barlow text-xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            ipsam corrupti asperiores sunt at adipisci, quis libero voluptates
            saepe voluptatem ipsa quaerat impedit consectetur, nobis ex cum sed
            aperiam. Voluptatum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempore ipsam corrupti asperiores sunt at
            adipisci, quis libero voluptates saepe voluptatem ipsa quaerat
            impedit consectetur, nobis ex cum sed aperiam. Voluptatum. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsam
            corrupti asperiores sunt at adipisci, quis libero voluptates saepe
            voluptatem ipsa quaerat impedit consectetur, nobis ex cum sed
            aperiam. Voluptatum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempore ipsam corrupti asperiores sunt at
            adipisci, quis libero voluptates saepe voluptatem ipsa quaerat
            impedit consectetur, nobis ex cum sed aperiam. Voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
