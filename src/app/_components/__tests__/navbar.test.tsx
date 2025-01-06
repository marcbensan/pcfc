import NavigationMenu from "@/app/_components/navbar";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("NavigationMenuDemo Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders desktop navigation with correct items", () => {
    render(<NavigationMenu>test</NavigationMenu>);
    const navItems = ["HOME", "ABOUT", "MINISTRIES", "BE A PART", "GIVING"];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeDefined();
    });
  });
});
