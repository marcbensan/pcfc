import Image from "next/image";

export default function LeadPastor() {
  return (
    <section className="diagonal-section-bottom--flip-x diagonal-section-top--flip-x relative z-[1] bg-primarypcfc py-32">
      <div className="mx-4 space-y-16 py-44 md:mx-24 md:space-y-0">
        <div className="flex flex-col items-center space-y-12 lg:flex-row lg:space-x-16 lg:space-y-0">
          <Image
            alt="images"
            width={500}
            height={1000}
            src="/people/mark-cheng.jpg"
            className="rounded-xl shadow-lg lg:h-[30rem]"
          />
          <div className="flex flex-col items-center space-y-8 text-center text-white lg:items-start lg:text-start">
            <p className="font-homenaje text-xl md:text-xl">OUR LEADERSHIP</p>
            <p className="font-barlow text-5xl font-semibold lg:text-7xl">
              MARK & RITCHES DOLOR
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
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
