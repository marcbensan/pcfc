import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function Baptism() {
  return (
    <div className="mx-4 space-y-32 px-24 py-32">
      <p className="max-w-ffull text-center font-monaSans text-5xl font-bold md:text-8xl">
        GET BAPTIZED
      </p>
      <div className="flex flex-col space-y-16">
        <div className="flex flex-row space-x-16">
          <Image width={1000} height={1000} alt="placeholder" src={imgLink} />
          <Image width={1000} height={1000} alt="placeholder" src={imgLink} />
        </div>
        <p className="text-center font-barlow text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex
          ut cupiditate provident. Ratione corporis a doloremque, officia rerum
          sint animi quo illo veritatis impedit, ab voluptatem beatae fugit.
        </p>
      </div>
    </div>
  );
}
