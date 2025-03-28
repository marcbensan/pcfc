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
import Image from "next/image";
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
            <Navbar className="top-0" />
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
    <div className={cn("z-10 mx-auto w-full", className)}>
      <Menu setActive={setActive}>
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex flex-row items-center">
            <Image
              alt="PCFC Logo"
              className="mr-4"
              width={50}
              height={50}
              src="/logo-white.png"
            />
            <div className="flex flex-col font-monaSans font-bold text-white">
              <p>PRAISE CHRISTIAN</p>
              <p>FAMILY CHURCH</p>
            </div>
          </Link>
          <div className="flex flex-row items-center justify-end space-x-12">
            <Link href="/">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
                disableHover
              />
            </Link>
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex w-40 flex-col space-y-4 py-2 pr-4 text-lg">
                <HoveredLink href="/about#mission">Mission</HoveredLink>
                <HoveredLink href="/about#values">Values</HoveredLink>
                <HoveredLink href="/about#lead-pastor">Leadership</HoveredLink>
                <HoveredLink href="/about#meet-the-team">Our Team</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Next Steps">
              <div className="flex flex-col gap-4 p-2 text-sm">
                <ProductItem
                  title="Join a Ministry"
                  href="/ministries"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Our ministries"
                />
                <ProductItem
                  title="Join a Connect Group"
                  href="/connect-group"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="This is connect group"
                />
                <ProductItem
                  title="Join Discipleship"
                  href="/discipleship"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Join a discipleship"
                />
                <ProductItem
                  title="Get Baptised"
                  href="/baptism"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="This is baptism"
                />
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Giving"
              disableHover
            />
          </div>
        </div>
      </Menu>
    </div>
  );
}
