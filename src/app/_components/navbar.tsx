"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="bg-zinc-800 w-full">
      <NavigationMenuList className="p-4">
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white transition-colors hover:text-zinc-400/30">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white transition-colors hover:text-zinc-400/30">
              Sermons
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white transition-colors hover:text-zinc-400/30">
              Ministries
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white transition-colors hover:text-zinc-400/30">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white transition-transform duration-100 hover:scale-105 hover:text-white/80">
              Giving
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
