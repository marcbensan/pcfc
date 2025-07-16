import { imgLink } from "@/lib/data/teamMembers";
import Image from "next/image";

export default function Discipleship(): JSX.Element {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Remove gradient backgrounds */}
        {/* ...no background gradients... */}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
          <h1 className="mb-6 font-monaSans text-4xl font-bold text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
            JOIN{" "}
            <span className="relative inline-block">
              <span>DISCIPLESHIP</span>
              {/* Remove gradient highlight */}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
            Grow deeper in your faith through meaningful relationships and
            intentional spiritual growth
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800">
              <div className="relative aspect-[4/3]">
                <Image
                  width={800}
                  height={600}
                  alt="Discipleship Program"
                  src={imgLink}
                  className="h-full w-full object-cover"
                  priority
                />
                {/* Remove overlay gradient */}
              </div>

              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg bg-white/90 p-3 backdrop-blur-sm dark:bg-slate-900/90">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Building authentic relationships in Christ
                  </p>
                </div>
              </div>
            </div>

            {/* Remove decorative gradient elements */}
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="font-monaSans text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
                OUR DISCIPLESHIP PROGRAM
              </h2>

              <div className="h-1 w-16 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <div className="space-y-4 font-barlow text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Our discipleship program is designed to help believers grow
                deeper in their relationship with Jesus Christ through
                intentional mentorship, biblical study, and authentic community.
              </p>

              <p>
                {`We believe that spiritual growth happens best in the context of
                meaningful relationships where we can encourage one another,
                study God's word together, and apply biblical principles to our
                daily lives.`}
              </p>

              <p>
                {`Whether you're a new believer or have been walking with Christ
                for years, our discipleship program offers a path for continued
                spiritual development and meaningful service to God's kingdom.`}
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button className="inline-flex items-center justify-center rounded-lg bg-primarypcfc px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-800">
                  Join Program
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 lg:mt-24">
          <h3 className="mb-8 text-center font-monaSans text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            {`What You'll Experience`}
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Biblical Study",
                description:
                  "Deep dive into Scripture with guided study and discussion",
                icon: "📖",
              },
              {
                title: "Mentorship",
                description: "One-on-one guidance from experienced believers",
                icon: "🤝",
              },
              {
                title: "Community",
                description: "Build lasting friendships with fellow disciples",
                icon: "👥",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/70"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h4 className="mb-2 font-monaSans text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
