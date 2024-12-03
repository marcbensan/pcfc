import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { NavigationMenuDemo } from "@/app/_components/navbar";

describe("NavigationMenuDemo Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const page = render(<NavigationMenuDemo />);
    expect(page).toMatchSnapshot();
  });

  it("renders desktop navigation with correct items", () => {
    render(<NavigationMenuDemo />);
    const navItems = ["About", "Sermons", "Ministries", "Contact", "Giving"];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeDefined();
    });
  });
});
