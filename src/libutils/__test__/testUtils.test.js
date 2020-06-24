import React from "react";
import { render, screen } from "testUtils";
import "@testing-library/jest-dom/extend-expect";
import { connect } from "react-redux";

describe("Test utils with store provider", () => {
  it("should render component", () => {
    const Component = (props) => <span data-testid="testing">Testing</span>;
    const mapStateToProps = ({ global }) => ({ global });
    const mapDispatchToProps = {};
    const ConnectTesting = connect(
      mapStateToProps,
      mapDispatchToProps
    )(Component);

    render(<ConnectTesting />);
    expect(screen.getByTestId("testing")).toHaveTextContent("Testing");
  });
});
