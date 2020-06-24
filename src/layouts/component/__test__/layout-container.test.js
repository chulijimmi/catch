import React from "react";
import serializer from "jest-emotion";
import Container from "../layout-container";
import renderer from "react-test-renderer";

expect.addSnapshotSerializer(serializer);

describe("layout-container test", () => {
  it("snappshoot", () => {
    expect(
      renderer.create(<Container>Test</Container>).toJSON()
    ).toMatchSnapshot();
  });
});
