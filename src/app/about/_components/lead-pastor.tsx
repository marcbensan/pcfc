"use client";

import Image from "next/image";

export default function LeadPastor() {
  return (
    <section className="diagonal-section-bottom--flip-x diagonal-section-top--flip-x relative z-[1] overflow-hidden bg-primarypcfc py-24">
      <div className="relative mx-4 space-y-16 py-32 md:mx-24 md:py-44">
        <div className="flex flex-col items-center space-y-16 lg:flex-row lg:space-x-20 lg:space-y-0">
          {/* Image Section */}
          <div className="group relative flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-white/20"></div>
            <div className="relative">
              <Image
                alt="Pastor Mark & Ritches Dolor"
                width={500}
                height={600}
                src="/people/mark-cheng.jpg"
                className="rounded-xl border-4 border-white/20 object-cover shadow-2xl lg:h-[35rem] lg:w-[28rem]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center space-y-10 text-center text-white lg:flex-1 lg:items-start lg:text-start">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <div className="h-px w-12 bg-white/60"></div>
                <p className="font-homenaje text-lg uppercase tracking-wider text-white/90 md:text-xl">
                  Our Leadership
                </p>
                <div className="h-px w-12 bg-white/60"></div>
              </div>

              <h2 className="font-barlow text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                MARK & RITCHES
                <br />
                <span className="text-white">DOLOR</span>
              </h2>

              <p className="font-barlow text-xl font-light text-white/80 md:text-2xl">
                Lead Pastors
              </p>
            </div>

            {/* Description */}
            <div className="max-w-2xl space-y-6">
              <p className="font-barlow text-lg leading-relaxed text-white/90 md:text-xl">
                Pastor Mark and Ritches have been faithfully serving our
                community for almost two decades, bringing a heart for
                transformation and a passion for God&apos;s word. Their ministry
                is characterized by authentic relationships, biblical teaching,
                and a commitment to seeing lives changed by the power of the
                Gospel.
              </p>

              <p className="font-barlow text-lg leading-relaxed text-white/80">
                Together, they lead with wisdom, compassion, and an unwavering
                dedication to building a church family where everyone can grow
                in their faith journey and discover their God-given purpose.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative max-w-2xl rounded-lg border-l-4 border-white/60 bg-white/5 p-6 backdrop-blur-sm">
              <div className="absolute left-2 top-2 font-serif text-4xl text-white/30">
                &apos;
              </div>
              <p className="pl-6 font-barlow text-lg italic text-white/90">
                Our heart is to see every person discover their identity in
                Christ and walk in the fullness of God&apos;s purpose for their
                life.
              </p>
              <cite className="mt-4 block text-right font-barlow text-sm text-white/70">
                - Pastor Mark & Ritches
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
