import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import VisionHero from "../vision-hero";

describe("VisionHero", () => {
  it("renders the OUR text", () => {
    render(<VisionHero />);
    const ourText = screen.getByText("OUR");
    expect(ourText).toBeDefined();
  });

  it("renders the VISION text", () => {
    render(<VisionHero />);
    const visionText = screen.getByText("VISION");
    expect(visionText).toBeDefined();
  });

  it("renders the vision statement", () => {
    render(<VisionHero />);
    const visionStatement = screen.getByText(
      /“For people to belong to a family, where they can grow in faith, build God’s kingdom and lift the name of Jesus above our city reaching all those in it.”/,
    );
    expect(visionStatement).toBeDefined();
  });
});
