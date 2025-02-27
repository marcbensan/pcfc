import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function Discipleship(): JSX.Element {
  return (
    <div className="mx-4 space-y-32 px-24 py-32">
      <p className="max-w-ffull text-end font-monaSans text-5xl font-bold md:text-8xl">
        JOIN DISCIPLESHIP
      </p>
      <div className="flex flex-row space-x-16">
        <div className="flex flex-col space-y-8 font-monaSans">
          <p className="text-2xl font-bold">OUR DISCIPLESHIP PROGRAM</p>
          <p className="font-barlow text-xl">
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
        <Image width={1000} height={1000} alt="placeholder" src={imgLink} />
      </div>
    </div>
  );
}
