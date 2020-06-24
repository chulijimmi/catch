import React from "react";
import loadable from "../loadable";
import { render, screen } from "../testUtils";

describe("loadable", () => {
  it("should render component", async () => {
    function LoadableComponent() {
      return <span>test</span>;
    }

    const LoadComponent = loadable(() => import(LoadableComponent), {
      fallback: <span data-testid="loadtest">Loadable product</span>,
    });

    await render(<LoadComponent />);
    expect(screen.getByTestId("loadtest")).toHaveTextContent(
      "Loadable product"
    );
  });
});
