"use client";

import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar-catalyst";
import { StackedLayout } from "@/components/stacked-layout-catalyst";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar";
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
            <Link href="/about">
              <MenuItem
                setActive={setActive}
                active={active}
                item="About"
                disableHover
              />
            </Link>
            <MenuItem setActive={setActive} active={active} item="Next Steps">
              <div className="flex w-auto flex-col space-y-4 py-2 pr-4 text-lg">
                <HoveredLink href="/ministries">Join a Ministry</HoveredLink>
                <hr />
                <HoveredLink href="/connect-group">Connect Group</HoveredLink>
                <hr />
                <HoveredLink href="/discipleship">
                  Join Discipleship
                </HoveredLink>
                <hr />
                <HoveredLink href="/baptism">Get Baptised</HoveredLink>
              </div>
            </MenuItem>
            <Link href="/giving">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Giving"
                disableHover
              />
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}
