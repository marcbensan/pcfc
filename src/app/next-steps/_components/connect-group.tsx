import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function ConnectGroup(): JSX.Element {
  return (
    <section className="diagonal-section-bottom--flip-x diagonal-section-top--flip-x relative z-[1] bg-primarypcfc px-8 py-32">
      <div className="mx-4 space-y-32 px-24 py-32">
        <p className="max-w-[80%] font-monaSans text-5xl font-bold text-white md:text-8xl">
          JOIN A CONNECT GROUP
        </p>
        <div className="flex flex-row space-x-16">
          <Image width={1000} height={1000} alt="placeholder" src={imgLink} />
          <div className="flex flex-col space-y-8 font-monaSans text-white">
            <p className="text-2xl font-bold">WHAT IS A CONNECT GROUP</p>
            <p className="font-barlow text-xl text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              ipsam corrupti asperiores sunt at adipisci, quis libero voluptates
              saepe voluptatem ipsa quaerat impedit consectetur, nobis ex cum
              sed aperiam. Voluptatum. Lorem ipsum dolor, sit amet consectetur
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
    </section>
  );
}
