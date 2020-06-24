import React from "react";
import { render, screen } from "testUtils";
import { ProductCardLoading, ProductCard } from "../product-screen";
import responseJson from "../../redux/__test__/response.json";

describe("product-screen test before data loaded", () => {
  it("should find loading component", () => {
    const Component = ({ product }) => {
      return product && product.loaded ? (
        <ProductCard data={product.data} />
      ) : (
        <ProductCardLoading />
      );
    };
    render(<Component />);
    expect(screen.getByTestId("product-card-loading")).toBeDefined();
  });

  it("should render test-id product-sold if quantityAvailable 0", () => {
    const props = {
      data: responseJson.results[0],
      t: jest.fn(),
    };
    render(<ProductCard {...props} />);
    expect(screen.getByTestId("product-sold")).toBeDefined();
  });

  it("should render test-id product-card-retail if retailPrice !== 0", () => {
    const props = {
      data: responseJson.results[0],
      t: jest.fn(),
    };
    render(<ProductCard {...props} />);
    expect(screen.getByTestId("product-card-retail")).toBeDefined();
  });
});
