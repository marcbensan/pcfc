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
import { SITE_COPY } from "@/lib/constants/site-copy";
import { MenuItemType } from "@/lib/types/navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, ReactNode, useState } from "react";
import Footer from "./footer";

const navbarItemsMobile: MenuItemType[] = [
  { name: "Home", href: "/", disable: false },
  { name: "About", href: "/about", disable: false },
  { name: "Ministries", href: "/ministries", disable: false },
  {
    name: SITE_COPY.nav.connectGroup,
    href: "https://pcfc-connect-group.vercel.app/",
    disable: false,
  },
  { name: "Discipleship", href: "/discipleship", disable: false },
  { name: SITE_COPY.nav.getBaptized, href: "/baptism", disable: false },
  { name: SITE_COPY.nav.giving, href: "/giving", disable: false },
];

export default function NavigationMenu({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <>
      <StackedLayout
        navbar={
          <div className="relative hidden w-full items-center justify-center text-white lg:flex">
            <Navbar className="top-0" />
          </div>
        }
        sidebar={
          <Sidebar>
            <SidebarHeader></SidebarHeader>
            <SidebarBody>
              <SidebarSection>
                {navbarItemsMobile.map(({ name, href }) => (
                  <SidebarItem className="font-monaSans" key={name} href={href}>
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
              <p>{SITE_COPY.nav.churchNameLineOne}</p>
              <p>{SITE_COPY.nav.churchNameLineTwo}</p>
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
            <MenuItem
              setActive={setActive}
              active={active}
              item={SITE_COPY.nav.nextSteps}
            >
              <div className="z-50 flex w-auto flex-col space-y-4 py-2 pr-4 text-lg">
                <HoveredLink href="/ministries">
                  {SITE_COPY.nav.joinMinistry}
                </HoveredLink>
                <hr />
                <HoveredLink
                  href="https://pcfc-connect-group.vercel.app/"
                  target="_blank"
                >
                  {SITE_COPY.nav.connectGroup}
                </HoveredLink>
                <hr />
                <HoveredLink href="/discipleship">
                  {SITE_COPY.nav.joinDiscipleship}
                </HoveredLink>
                <hr />
                <HoveredLink href="/baptism">
                  {SITE_COPY.nav.getBaptized}
                </HoveredLink>
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
