import NavigationMenu from "@/app/_components/navbar";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("NavigationMenuDemo Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const page = render(<NavigationMenu>test</NavigationMenu>);
    expect(page).toMatchSnapshot();
  });

  it("renders desktop navigation with correct items", () => {
    render(<NavigationMenu>test</NavigationMenu>);
    const navItems = ["Sermons", "Ministries", "Contact", "Giving"];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeDefined();
    });
  });
});
