"use client";

import { Building, CreditCard, Gift, Globe, Smartphone } from "lucide-react";
import React, { useState } from "react";

const GivingMethodCard = ({ icon, title, description }) => (
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

const ImpactCard = ({ number, label, description }) => (
  <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
    <div className="space-y-4 text-center">
      <div className="font-barlow text-5xl font-bold text-blue-500">
        {number}
      </div>
      <h3 className="font-barlow text-xl font-bold text-gray-800">{label}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Giving() {
  const [activeMethod, setActiveMethod] = useState("online");
  const [selectedAmount, setSelectedAmount] = useState("");

  const givingMethods = [
    {
      id: "online",
      icon: <Globe />,
      title: "Online Giving",
      description: "Secure, convenient giving through our website",
    },
    {
      id: "mobile",
      icon: <Smartphone />,
      title: "Mobile App",
      description: "Give on-the-go with our mobile application",
    },
    {
      id: "inperson",
      icon: <Building />,
      title: "In-Person",
      description: "Traditional offering during Sunday service",
    },
    {
      id: "card",
      icon: <CreditCard />,
      title: "Card Reader",
      description: "Use our card readers available at the church",
    },
  ];

  const predefinedAmounts = ["25", "50", "100", "250", "500"];

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-20 mx-auto max-w-5xl px-8 text-center md:px-0">
          <div className="mb-8 flex items-center justify-center">
            <h1 className="font-barlow text-5xl font-bold text-white md:text-7xl">
              GIVING
            </h1>
          </div>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-blue-100">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver." - 2 Corinthians 9:7
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-orange-500 px-8 py-4 font-barlow text-lg font-bold text-white transition-colors duration-300 hover:bg-orange-600">
              GIVE NOW
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute left-20 top-20 h-4 w-4 animate-pulse rounded-full bg-white/20" />
        <div className="absolute bottom-32 right-32 h-6 w-6 animate-bounce rounded-full bg-orange-400/30" />
        <div className="absolute left-10 top-1/2 h-3 w-3 animate-pulse rounded-full bg-blue-300/40" />
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl space-y-32 px-4 md:px-12">
          {/* Why We Give Section */}
          <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-orange-100 px-8 py-24 font-monaSans shadow-sm md:px-32 lg:flex-row lg:space-x-8 lg:space-y-0">
            <div className="lg:w-1/2">
              <h2 className="mb-6 font-barlow text-5xl font-bold text-gray-800 md:text-7xl">
                WHY WE GIVE
              </h2>
            </div>
            <div className="space-y-6 lg:w-1/2">
              <p className="text-lg leading-relaxed text-gray-700">
                Giving is an act of worship that reflects our trust in God's
                provision and our commitment to His kingdom. Through your
                generous contributions, we can continue to spread the Gospel,
                serve our community, and support those in need.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Every gift, regardless of size, makes a meaningful impact in
                advancing God's work through Praise Christian Family Church.
                Your faithfulness in giving helps us fulfill our mission to love
                God and serve others.
              </p>
            </div>
          </div>

          {/* Giving Methods Section */}
          <div className="space-y-16 text-center">
            <div className="relative flex items-center py-5">
              <div className="hidden flex-grow border-4 border-t border-zinc-600 md:flex" />
              <h2 className="mx-2 flex-shrink text-center font-barlow text-4xl font-semibold md:text-6xl lg:mx-8">
                WAYS TO GIVE
              </h2>
              <div className="hidden flex-grow border-4 border-t border-zinc-600 md:block" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {givingMethods.map((method) => (
                <GivingMethodCard
                  key={method.id}
                  icon={method.icon}
                  title={method.title}
                  description={method.description}
                  isActive={activeMethod === method.id}
                />
              ))}
            </div>
          </div>

          {/* Biblical Foundation */}
          <div className="rounded-xl bg-blue-800 p-8 text-white md:p-16">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <Gift className="mx-auto h-16 w-16 text-orange-400" />
              <h3 className="font-barlow text-4xl font-bold">
                BIBLICAL FOUNDATION
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-blue-100">
                <p>
                  "Bring the whole tithe into the storehouse, that there may be
                  food in my house. Test me in this," says the Lord Almighty,
                  "and see if I will not throw open the floodgates of heaven and
                  pour out so much blessing that there will not be room enough
                  to store it."
                </p>
                <p className="font-semibold text-orange-300">- Malachi 3:10</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg md:p-12">
            <h3 className="mb-6 font-barlow text-3xl font-bold text-gray-800">
              QUESTIONS ABOUT GIVING?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              We're here to help! If you have any questions about giving,
              setting up recurring donations, or need assistance with our giving
              platform, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-600">
                Contact Us
              </button>
              <button className="rounded-xl border-2 border-blue-500 px-6 py-3 font-bold text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
