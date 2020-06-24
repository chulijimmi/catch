import React from "react";
import serializer from "jest-emotion";
import renderer from "react-test-renderer";
import ProductFilter from "../product-filter";

expect.addSnapshotSerializer(serializer);

describe("product-filter test", () => {
  it("snappshoot", () => {
    expect(renderer.create(<ProductFilter />).toJSON()).toMatchSnapshot();
  });
});
