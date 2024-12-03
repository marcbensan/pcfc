"use client";

import Link from "next/link";
import { MenuItem } from "@/lib/types/navbar";
import { Bars2Icon } from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Collapsible } from "@/components/ui/collapsible";

const navBarItems: MenuItem[] = [
  { name: "About", href: "/" },
  { name: "Sermons", href: "/sermons" },
  { name: "Ministries", href: "/ministries" },
  { name: "Contact", href: "/contact" },
  { name: "Giving", href: "/giving" },
];

export function NavigationMenuDemo(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(navBarItems[0]);

  return (
    <>
      {/* DESKTOP VIEW */}
      <NavigationMenu className="bg-zinc-800 w-full hidden md:flex">
        <NavigationMenuList className="px-4 pt-6 pb-1">
          {navBarItems.map((item) => (
            <NavigationMenuItem key={item.name} className="relative">
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  onClick={() => setSelectedItem(item)}
                  className={`${selectedItem === item ? "border-b-4 border-white" : "hover:border-b-2 hover:border-white/80"} 
                  inline-flex h-9 w-max items-center justify-center px-4 py-2 text-md font-bold text-white`}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* MOBILE VIEW */}
      <HamburgerMenu />
    </>
  );
}

function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-zinc-800 w-full py-3 md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Bars2Icon className="size-10 text-white pl-4" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <SheetTitle className="sr-only">Accessible Title</SheetTitle>
          <nav className="flex flex-col space-y-3 pt-4">
            {navBarItems.map((item) => (
              <MenuItemComponent key={item.name} item={item} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuItemComponent({
  item,
}: Readonly<{ item: MenuItem }>): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Link href={item.href} legacyBehavior passHref>
        <Button
          variant="ghost"
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex w-full items-center justify-between py-2 text-md font-bold transition-colors hover:text-primary"
          )}
        >
          {item.name}
        </Button>
      </Link>
    </Collapsible>
  );
}
