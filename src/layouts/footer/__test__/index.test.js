import React from "react";
import Footer from "../index";
import { render, screen } from "testUtils";

describe("footer test", () => {
  it("take snapshoot", () => {
    render(<Footer />);
    expect(screen.getByTestId("lng-english")).toHaveTextContent("English");
    expect(screen.getByTestId("lng-indonesia")).toHaveTextContent("Indonesia");
    expect(screen).toMatchSnapshot();
  });
});
