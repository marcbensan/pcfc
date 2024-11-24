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
      <NavigationMenuList className="px-4 pt-6 pb-1">
        {navBarItems.map((item) => (
          <NavigationMenuItem key={item.id} className="relative">
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md hover:border-b-2 hover:border-white font-bold text-white">
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
