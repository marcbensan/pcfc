"use client";

import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar-catalyst";
import { StackedLayout } from "@/components/stacked-layout-catalyst";
import { Menu, MenuItem } from "@/components/ui/navbar";
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
        {navBarItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={item.name}
              disableHover={item.disable}
            />
          </Link>
        ))}
      </Menu>
    </div>
  );
}
