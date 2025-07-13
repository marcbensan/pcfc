"use client";

import Image from "next/image";

export default function LeadPastor() {
  return (
    <section className="diagonal-section-bottom--flip-x diagonal-section-top--flip-x relative z-[1] overflow-hidden overflow-x-hidden bg-primarypcfc py-24">
      <div className="mx-4 w-full py-32 md:mx-24 md:py-44">
        <div className="flex w-full flex-col items-center space-y-16 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* Image Section */}
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              alt="Pastor Mark & Ritches Dolor"
              width={400}
              height={400}
              src="/people/mark-cheng.jpg"
              className="w-full max-w-xs rounded-xl border-4 border-white/20 object-cover shadow-2xl lg:max-w-none"
            />
          </div>

          {/* Content Section */}
          <div className="flex w-full flex-col items-center space-y-10 text-center text-white lg:w-1/2 lg:items-start lg:text-start">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="h-px w-12 bg-white/60"></div>
                <p className="font-homenaje text-lg uppercase tracking-wider text-white/90 md:text-xl">
                  Our Leadership
                </p>
                <div className="h-px w-12 bg-white/60"></div>
              </div>

              <h2 className="font-barlow text-4xl font-bold leading-tight lg:text-6xl xl:text-7xl">
                MARK & RITCHES
                <br />
                <span className="text-white">DOLOR</span>
              </h2>

              <p className="font-barlow text-xl font-light text-white/80 md:text-2xl">
                Lead Pastors
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-barlow text-lg text-white/90 md:text-xl">
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
            <blockquote className="relative rounded-lg border-l-4 border-white/60 bg-white/5 p-6 backdrop-blur-sm">
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
