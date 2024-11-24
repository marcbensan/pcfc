"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navBarItems = [
  { id: 1, name: "About", href: "/about" },
  { id: 2, name: "Sermons", href: "/sermons" },
  { id: 3, name: "Ministries", href: "/ministries" },
  { id: 4, name: "Contact", href: "/contact" },
  { id: 5, name: "Giving", href: "/giving" },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="bg-zinc-800 w-full">
      <NavigationMenuList className="p-4">
        {navBarItems.map((item) => (
          <NavigationMenuItem key={item.id}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white transition-colors hover:text-zinc-400/30">
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
