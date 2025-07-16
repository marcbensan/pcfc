import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function Baptism() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
          <h1 className="mb-6 font-monaSans text-4xl font-bold text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
            GET BAPTIZED
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
            Take the next step in your faith journey through this beautiful act
            of obedience
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16 lg:space-y-20">
          {/* Image Gallery */}
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800">
              <div className="relative aspect-[4/3]">
                <Image
                  width={800}
                  height={600}
                  alt="Baptism Ceremony"
                  src={imgLink}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/5"></div>
              </div>

              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg bg-white/95 p-3 backdrop-blur-sm dark:bg-slate-900/95">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    A moment of new beginnings
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800">
              <div className="relative aspect-[4/3]">
                <Image
                  width={800}
                  height={600}
                  alt="Baptism Community"
                  src={imgLink}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/5"></div>
              </div>

              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg bg-white/95 p-3 backdrop-blur-sm dark:bg-slate-900/95">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Celebrating with our church family
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-slate-50 p-8 dark:bg-slate-800 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-12 rounded-full bg-primarypcfc"></div>
                  <h2 className="font-monaSans text-2xl font-bold text-slate-900 dark:text-white">
                    Why Get Baptized?
                  </h2>
                </div>

                <div className="space-y-4 font-barlow text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    Baptism is a beautiful and significant step in your faith
                    journey, representing your decision to follow Jesus Christ
                    and your identification with His death and resurrection.
                  </p>

                  <p>
                    {`This sacred act symbolizes the washing away of sin and the
                    beginning of a new life in Christ. It's a public declaration
                    of your faith and commitment to living as a disciple of
                    Jesus.`}
                  </p>

                  <p>
                    At Praise Christian Family Church, we celebrate each baptism
                    as a joyous occasion where the entire church family comes
                    together to witness and support this important milestone in
                    your spiritual journey.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <button className="inline-flex transform items-center justify-center rounded-lg bg-primarypcfc px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:opacity-90">
                      Schedule Baptism
                    </button>
                    <button className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="py-12 text-center">
            <div className="mx-auto max-w-3xl">
              <blockquote className="text-2xl font-medium text-slate-900 dark:text-white md:text-3xl">
                {`"Therefore go and make disciples of all nations, baptizing them
                in the name of the Father and of the Son and of the Holy Spirit"`}
              </blockquote>
              <cite className="mt-4 block text-lg text-slate-600 dark:text-slate-400">
                — Matthew 28:19
              </cite>
              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primarypcfc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
