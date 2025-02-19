import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function LeadPastor() {
  return (
    <section className="diagonal-section-bottom--flip-x diagonal-section-top--flip-x relative z-[1] bg-primarypcfc px-8 py-32">
      <div className="mx-4 space-y-16 py-44 md:mx-24 md:space-y-0">
        <div className="flex flex-col space-y-24 md:flex-row md:space-x-24 md:space-y-0">
          <Image
            alt="images"
            width={500}
            height={1000}
            src={imgLink}
            className="rounded-3xl shadow-lg"
          />
          <div className="flex flex-col space-y-8 font-monaSans text-white">
            <p className="text-4xl font-bold md:text-6xl">OUR LEADERSHIP</p>
            <p className="text-2xl font-semibold">
              PASTOR MARK AND RITCHES DOLOR
            </p>
            <p className="font-barlow text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              molestiae minus beatae quaerat optio, unde rem vel voluptas nulla
              facere, impedit nesciunt doloremque autem necessitatibus magnam
              veniam iusto alias. Aspernatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aliquam molestiae minus beatae
              quaerat optio, unde rem vel voluptas nulla facere, impedit
              nesciunt doloremque autem necessitatibus magnam veniam iusto
              alias. Aspernatur? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Aliquam molestiae minus beatae quaerat optio,
              unde rem vel voluptas nulla facere, impedit nesciunt doloremque
              autem necessitatibus magnam veniam iusto alias. Aspernatur? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              molestiae minus beatae quaerat optio, unde rem vel voluptas nulla
              facere, impedit nesciunt doloremque autem necessitatibus magnam
              veniam iusto alias. Aspernatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aliquam molestiae minus beatae
              quaerat optio, unde rem vel voluptas nulla facere, impedit
              nesciunt doloremque autem necessitatibus magnam veniam iusto
              alias. Aspernatur?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
