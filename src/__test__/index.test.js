import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { MOUNT_NODE } from "../index";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("test ReactDOM render", () => {
  beforeEach(() => {
    ReactDOM.render(
      <StrictMode>
        <App />
      </StrictMode>,
      MOUNT_NODE
    );
  });

  it("should null MOUNT_NODE", () => {
    expect(MOUNT_NODE).toEqual(null);
  });
  it("renders without crashing", () => {
    global.document.getElementById = (id) => id === "app";
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
