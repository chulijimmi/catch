import React from "react";
import Header from "../index";
import { render, screen } from "testUtils";

describe("render test", () => {
  it("should render title props", () => {
    const props = {
      title: "Hello",
    };
    render(<Header {...props} />);
    expect(screen.getByTestId("header-title")).toHaveTextContent(props.title);
  });
});
