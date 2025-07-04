import { Button } from "@/components/button-catalyst";
import { ArrowRight, BookOpen, Globe, Heart, Users } from "lucide-react";

export default function Foursquare() {
  const highlights = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Faith-Centered",
      description: "Rooted in biblical principles and Christian values",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Focused",
      description: "Building meaningful connections and relationships",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Impact",
      description: "Making a difference in communities worldwide",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Spirit-Led",
      description: "Guided by the Holy Spirit in all we do",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-60">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl"></div>
        <div className="absolute bottom-32 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 blur-3xl"></div>
        <div className="absolute left-10 top-1/2 h-32 w-32 rounded-full bg-gradient-to-br from-green-500 to-blue-600 blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-20 space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="font-barlow text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-7xl lg:text-8xl">
              WHAT IS FOURSQUARE?
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
            </div>
          </div>

          <p className="mx-auto max-w-3xl font-barlow text-lg leading-relaxed text-gray-600 md:text-xl">
            Discover the heart of our movement - a dynamic, Spirit-filled
            community dedicated to spreading the Gospel and transforming lives
            around the world.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primarypcfc text-white transition-transform duration-300 group-hover:scale-110">
                  {highlight.icon}
                </div>
                <h3 className="font-barlow text-lg font-bold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="font-barlow text-sm leading-relaxed text-gray-600">
                  {highlight.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h3 className="font-barlow text-2xl font-bold text-gray-800 md:text-3xl">
              Ready to Learn More?
            </h3>
            <p className="mx-auto max-w-xl font-barlow text-gray-600">
              Explore our core beliefs and discover what makes the Foursquare
              movement unique.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="https://www.foursquare.org/about/beliefs/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full min-w-[280px] transform rounded-full px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3 font-barlow text-lg">
                WHAT WE BELIEVE
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>

              {/* Button shine effect */}
              <div className="group-hover:animate-shine absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
