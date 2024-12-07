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
  { name: "PCFC", href: "/" },
  { name: "Sermons", href: "/sermons" },
  { name: "Ministries", href: "/ministries" },
  { name: "Contact", href: "/contact" },
  { name: "Giving", href: "/giving" },
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
            <Image
              alt="PCFC Logo"
              className="m-4"
              width={40}
              height={40}
              src="/logo-white.png"
            />
          </Link>
          <NavbarSpacer />
          <NavbarSection className="max-lg:hidden">
            {navBarItems.map(({ name, href }) => (
              <NavbarItem
                key={name}
                href={href}
                current={href === currentUrl}
                className="text-white"
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
