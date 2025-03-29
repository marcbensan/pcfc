"use client";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  disableHover = false,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  disableHover?: boolean;
}) => {
  return (
    <div
      onMouseEnter={() => !disableHover && setActive(item)}
      className="relative"
    >
      <motion.p
        suppressHydrationWarning
        transition={{ duration: 0.3 }}
        className={clsx(
          "cursor-pointer font-monaSans text-lg font-bold text-white dark:text-white",
          !disableHover && "hover:opacity-[0.9]",
        )}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          suppressContentEditableWarning
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.8rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                suppressHydrationWarning
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-tertiarypcfc shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  suppressHydrationWarning
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="hidden w-full space-x-12 border-b border-gray-800 bg-primarypcfc px-8 py-6 shadow-input dark:border-white/[0.2] dark:bg-black lg:flex"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description?: string;
  href: string;
  src?: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      {src && (
        <Image
          src={src}
          width={140}
          height={70}
          alt={title}
          className="shrink-0 rounded-md shadow-2xl"
        />
      )}

      <div>
        <h4 className="mb-1 text-lg font-bold text-black">{title}</h4>
        {description && (
          <p className="max-w-[10rem] text-xs text-gray-600">{description}</p>
        )}
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="font-bold text-black hover:text-zinc-600 dark:text-neutral-200"
    >
      {children}
    </Link>
  );
};
