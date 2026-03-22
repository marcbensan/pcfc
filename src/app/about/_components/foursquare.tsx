import { Button } from "@/components/button-catalyst";
import { APP_STYLES } from "@/lib/styles/app-shared";
import { ArrowRight } from "lucide-react";

export default function Foursquare() {
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

          <p className={APP_STYLES.sectionLead}>
            Discover the heart of our movement - a dynamic, Spirit-filled
            community dedicated to spreading the Gospel and transforming lives
            around the world.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h3 className={APP_STYLES.sectionHeading}>Ready to Learn More?</h3>
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
