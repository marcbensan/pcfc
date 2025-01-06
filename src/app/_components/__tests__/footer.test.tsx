import Footer from "@/app/_components/footer";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Footer", () => {
  it("renders the GET IN TOUCH text", () => {
    render(<Footer />);
    expect(screen.getByText("GET IN TOUCH")).toBeDefined();
  });

  it("renders the social media links", () => {
    render(<Footer />);
    expect(screen.getByText("@pcfctoronto")).toBeDefined();
    expect(screen.getByText("PCFC Toronto")).toBeDefined();
  });

  it("renders the Stay Connected section", () => {
    render(<Footer />);
    expect(screen.getByText("Stay Connected")).toBeDefined();
    expect(screen.getByPlaceholderText("Email")).toBeDefined();
  });
});
