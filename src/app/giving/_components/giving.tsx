"use client";

import { SITE_COPY } from "@/lib/constants/site-copy";
import { APP_STYLES } from "@/lib/styles/app-shared";
import { Building, Gift, Globe, Smartphone } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";

const GivingMethodCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) => (
  <div
    className={`cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:bg-blue-50 hover:shadow-md`}
  >
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className={`rounded-full bg-blue-100 p-3`}>
        {React.cloneElement(icon, {
          className: `w-8 h-8 text-blue-500`,
        })}
      </div>
      <h3 className="font-barlow text-lg font-bold">{title}</h3>
      <p className={`text-sm text-gray-600`}>{description}</p>
    </div>
  </div>
);

export default function Giving() {
  const givingMethods = [
    {
      id: "online",
      icon: <Globe />,
      title: "Online Giving",
      description: "Secure, convenient giving through our website",
    },
    {
      id: "inperson",
      icon: <Building />,
      title: "In-Person",
      description: "Traditional offering during Sunday service",
    },
    {
      id: "etransfer",
      icon: <Smartphone />,
      title: "E-Transfer",
      description: "E-Transfer to pcfcdonate@gmail.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primarypcfc via-blue-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-20 mx-auto max-w-5xl px-8 text-center md:px-0">
          <div className="mb-8 flex items-center justify-center">
            <h1 className="font-barlow text-5xl font-bold text-white md:text-7xl">
              GIVING
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-blue-100">
            <p>
              {`"Bring the whole tithe into the storehouse, that there may be food
              in my house. Test me in this," says the Lord Almighty, "and see if
              I will not throw open the floodgates of heaven and pour out so
              much blessing that there will not be room enough to store it."`}
            </p>
            <p className="font-semibold text-orange-300">- Malachi 3:10</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                target="_blank"
                href={
                  "https://www.paypal.com/donate?token=f0OAOWaYoK39VRd5DTmF78K5DcIMb6F4DFax1nO1ML4L1cs9tefDmyAi1PI-uVxxLJ96g6KsE2ME0Y5a"
                }
                className="rounded-xl bg-secondarypcfc px-8 py-4 font-barlow text-lg font-bold text-primarypcfc transition-colors duration-300 hover:bg-secondarypcfc/80"
              >
                {SITE_COPY.cta.giveNow}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute left-20 top-20 h-4 w-4 animate-pulse rounded-full bg-white/20" />
        <div className="absolute bottom-32 right-32 h-6 w-6 animate-bounce rounded-full bg-orange-400/30" />
        <div className="absolute left-10 top-1/2 h-3 w-3 animate-pulse rounded-full bg-primarypcfc/40" />
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl space-y-32 px-4 md:px-12">
          {/* Why We Give Section */}
          <div className="flex w-full flex-col items-center space-y-8 rounded-xl bg-orange-100 px-8 py-24 font-monaSans shadow-lg md:px-32 lg:flex-row lg:space-x-8 lg:space-y-0">
            <div className="lg:w-1/2">
              <h2 className="mb-6 font-barlow text-5xl font-bold text-gray-800 md:text-7xl">
                WHY WE GIVE
              </h2>
            </div>
            <div className="space-y-6 lg:w-1/2">
              <p className="text-lg leading-relaxed text-gray-700">
                {
                  "Giving is an act of worship that reflects our trust in God's provision and our commitment to His kingdom. Through your generous contributions, we can continue to spread the Gospel, serve our community, and support those in need."
                }
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                {
                  "Every gift, regardless of size, makes a meaningful impact in advancing God's work through Praise Christian Family Church. Your faithfulness in giving helps us fulfill our mission to love God and serve others."
                }
              </p>
            </div>
          </div>

          {/* Giving Methods Section */}
          <div className="space-y-16 text-center">
            <div className={APP_STYLES.sectionDivider}>
              <div className={APP_STYLES.sectionDividerLine} />
              <h2 className={APP_STYLES.sectionDividerTitle}>
                {SITE_COPY.labels.waysToGive}
              </h2>
              <div className={APP_STYLES.sectionDividerLineAlt} />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {givingMethods.map((method) => (
                <GivingMethodCard
                  key={method.id}
                  icon={method.icon}
                  title={method.title}
                  description={method.description}
                />
              ))}
            </div>
          </div>

          {/* Biblical Foundation */}
          <div className="rounded-xl bg-primarypcfc p-8 text-white md:p-16">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <Gift className="mx-auto h-16 w-16 text-secondarypcfc" />
              <h3 className="font-barlow text-4xl font-bold">
                BIBLICAL FOUNDATION
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-blue-100">
                <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-blue-100">
                  {
                    '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg md:p-12">
            <h3 className="mb-6 font-barlow text-3xl font-bold text-gray-800">
              QUESTIONS ABOUT GIVING?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              We&apos;re here to help! If you have any questions about giving,
              setting up recurring donations, or need assistance with our giving
              platform, please don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className={APP_STYLES.ctaRoundedPrimary}>
                {SITE_COPY.cta.contactUs}
              </button>
              <button className={APP_STYLES.ctaRoundedOutline}>
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
