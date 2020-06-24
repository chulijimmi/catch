import React from "react";
import serializer from "jest-emotion";
import renderer from "react-test-renderer";
import Card from "../product-card";

expect.addSnapshotSerializer(serializer);

describe("product-card test", () => {
  it("snappshoot", () => {
    const ProductCard = () => {
      return <Card.Col></Card.Col>;
    };
    expect(renderer.create(<ProductCard />).toJSON()).toMatchSnapshot();
  });
});
