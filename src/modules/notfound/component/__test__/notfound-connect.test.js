import React from "react";
import { render, screen } from "testUtils";
import NotfoundConnect from "../notfound-connect";

describe("notfound-connect test", () => {
  it("should render message page not found", () => {
    render(<NotfoundConnect />);
    expect(screen.getByTestId("notfound-title")).toHaveTextContent(
      "Sorry, Page not found"
    );
  });
});
