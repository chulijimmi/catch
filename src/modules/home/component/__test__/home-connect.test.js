import React from "react";
import { render, screen } from "testUtils";
import HomeConnect from "../home-connect";

describe("home-connect test", () => {
  it("should render message page not found", () => {
    render(<HomeConnect />);
    expect(screen.getByTestId("home-welcome")).toHaveTextContent(
      "Hi, Ben Akward welcome."
    );
    expect(screen.getByText(/welcome/)).toBeDefined();
  });
});
