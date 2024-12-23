"use client";

import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar-catalyst";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar-catalyst";
import { StackedLayout } from "@/components/stacked-layout-catalyst";
import { MenuItem } from "@/lib/types/navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

const navBarItems: MenuItem[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "MINISTRIES", href: "/ministries" },
  { name: "BE A PART", href: "/be-a-part" },
  { name: "GIVING", href: "/giving" },
];

export default function NavigationMenu({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  const currentUrl = usePathname();

  return (
    <StackedLayout
      navbar={
        <Navbar className="space-between flex">
          <Link href="/" className="max-lg:hidden">
            <div className="flex flex-row items-center">
              <Image
                alt="PCFC Logo"
                className="m-4"
                width={50}
                height={50}
                src="/logo-white.png"
              />
              <div className="flex flex-col font-monaSans font-bold text-white">
                <p>PRAISE CHRISTIAN</p>
                <p>FAMILY CHURCH</p>
              </div>
            </div>
          </Link>
          <NavbarSpacer />
          <NavbarSection className="max-lg:hidden">
            {navBarItems.map(({ name, href }) => (
              <NavbarItem
                key={name}
                href={href}
                current={href === currentUrl}
                className="font-monaSans font-bold text-white"
              >
                {name}
              </NavbarItem>
            ))}
          </NavbarSection>
        </Navbar>
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
  );
}
