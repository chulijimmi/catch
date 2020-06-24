import React from "react";
import { render, screen } from "testUtils";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("App render", () => {
  it("Should render link menu", () => {
    render(<App />);
  });
});
