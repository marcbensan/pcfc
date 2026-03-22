"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { teamMembers } from "@/lib/data/teamMembers";
import { APP_STYLES } from "@/lib/styles/app-shared";
import Autoplay from "embla-carousel-autoplay";
import { Award, Heart, Mail, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MeetTheTeam() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const router = useRouter();

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "10+",
      label: "Team Leads",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "100%",
      label: "Dedicated",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-8 space-y-16 py-32 md:mx-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primarypcfc"></div>
              <Star className="h-8 w-8 text-primarypcfc" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primarypcfc"></div>
            </div>

            <h2 className="bg-clip-text font-monaSans text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
              MEET THE TEAM
            </h2>

            <div className="mx-auto h-1 w-32 rounded-full bg-primarypcfc"></div>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="font-barlow text-xl leading-relaxed text-gray-700 md:text-2xl">
              Meet our incredible team of passionate leaders, dedicated
              servants, and faithful volunteers who make PCFC a place where
              lives are transformed and community thrives.
            </p>

            <p className="font-barlow text-lg text-gray-500">
              Each member brings unique gifts, talents, and a heart for ministry
              to serve our church family.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primarypcfc text-white">
                    {stat.icon}
                  </div>
                  <div className="font-barlow text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-center font-barlow text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel
            className="h-full w-full"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent className="flex space-x-6 pb-4">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.name}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div
                    className="group relative transform rounded-3xl border border-gray-100 bg-white p-6 shadow-lg"
                    onMouseEnter={() => setHoveredMember(member.name)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    {/* Card background gradient on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-500"></div>

                    <div className="relative space-y-6">
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          alt={`${member.name} - ${member.position}`}
                          width={400}
                          height={400}
                          src={member.img}
                          className="h-64 w-full object-cover"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        {/* Contact info overlay */}
                        <div className="absolute bottom-4 left-4 right-4 translate-y-full transform transition-transform duration-300 group-hover:translate-y-0">
                          <div className="space-y-2 rounded-lg bg-white/90 p-3 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <Mail className="h-4 w-4" />
                              <span className="font-barlow">
                                sample@gmail.com
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4 text-center">
                        <div className="space-y-2">
                          <h3 className="font-barlow text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 md:text-3xl">
                            {member.name}
                          </h3>
                          <div className="mx-auto h-px w-12 bg-primarypcfc transition-all duration-300 group-hover:w-20"></div>
                        </div>

                        <div className="rounded-xl bg-secondarypcfc p-3">
                          <p className="font-barlow text-lg font-semibold text-gray-700">
                            {member.position}
                          </p>
                        </div>

                        {/* Additional info that appears on hover */}
                        <div
                          className={`space-y-3 transition-all duration-300 ${
                            hoveredMember === member.name
                              ? "max-h-32 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0"
                          }`}
                        >
                          <div className="flex justify-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                            <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                            <div className="h-2 w-2 rounded-full bg-red-400"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom navigation */}
            <div className="my-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="relative left-0 translate-y-0 border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-50" />
              <div className="flex gap-2">
                {/* Carousel indicators */}
                {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="h-2 w-2 rounded-full bg-gray-300"
                    ></div>
                  ),
                )}
              </div>
              <CarouselNext className="relative right-0 translate-y-0 border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-50" />
            </div>
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="space-y-6 pt-8 text-center">
          <h3 className={APP_STYLES.sectionHeading}>Want to Join Our Team?</h3>
          <p className="mx-auto max-w-2xl font-barlow text-lg text-gray-600">
            {`We're always looking for passionate individuals who want to make a
            difference in our community.`}
          </p>
          <Button
            onClick={() => router.push("/ministries")}
            className="transform rounded-full bg-primarypcfc px-8 py-6 font-barlow font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-900"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
