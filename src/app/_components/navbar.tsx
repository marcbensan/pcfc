"use client";

import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar-catalyst";
import { StackedLayout } from "@/components/stacked-layout-catalyst";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar";
import { MenuItemType } from "@/lib/types/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren, ReactNode, useState } from "react";
import Footer from "./footer";

const navBarItems: MenuItemType[] = [
  { name: "HOME", href: "/", disable: true },
  { name: "ABOUT", href: "/about", disable: false },
  { name: "NEXT STEPS", href: "/next-steps", disable: false },
  { name: "GIVE", href: "/giving", disable: true },
];

export default function NavigationMenu({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <>
      <StackedLayout
        navbar={
          <div className="relative hidden w-full items-center justify-center lg:flex">
            <Navbar className="top-2" />
          </div>
        }
        sidebar={
          <Sidebar>
            <SidebarHeader></SidebarHeader>
            <SidebarBody>
              <SidebarSection>
                {navBarItems.map(({ name, href }) => (
                  <SidebarItem key={name} href={href}>
                    {name}
                  </SidebarItem>
                ))}
              </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        {children}
      </StackedLayout>
      <Footer />
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            disableHover
          />
        </Link>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex w-40 flex-col space-y-4 text-sm">
            <HoveredLink href="/about#mission">Mission</HoveredLink>
            <HoveredLink href="/about#values">Values</HoveredLink>
            <HoveredLink href="/about#lead-pastor">Leadership</HoveredLink>
            <HoveredLink href="/about#meet-the-team">Our Team</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Next Steps">
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Giving"
          disableHover
        />
      </Menu>
    </div>
  );
}
