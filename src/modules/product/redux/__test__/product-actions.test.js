import {
  loadProduct,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  loadProductSuccess,
  LOAD_PRODUCT_ERROR,
  loadProductError,
  SORT_PRODUCT_HIGH_PRICE,
  sortProductHighPrice,
  SORT_PRODUCT_LOW_PRICE,
  sortProductLowPrice,
} from "../product-actions";

describe("product action test", () => {
  it("should return correct payload loadProduct", () => {
    const expectedResult = {
      type: LOAD_PRODUCT,
    };

    expect(loadProduct()).toEqual(expectedResult);
  });

  it("should return correct payload loadProductSuccess", () => {
    const results = [1, 2, 3];
    const metadata = { page: 1 };
    const expectedResult = {
      type: LOAD_PRODUCT_SUCCESS,
      results,
      metadata,
    };

    expect(loadProductSuccess(results, metadata)).toEqual(expectedResult);
  });

  it("should return correct payload loadProductError", () => {
    const error = { status: 401, statusText: "Page not found" };
    const expectedResult = {
      type: LOAD_PRODUCT_ERROR,
      error,
    };

    expect(loadProductError(error)).toEqual(expectedResult);
  });

  it("should return correct payload sortProductHighPrice", () => {
    const data = [1, 2, 3, 4];
    const expectedResult = {
      type: SORT_PRODUCT_HIGH_PRICE,
      data,
    };

    expect(sortProductHighPrice(data)).toEqual(expectedResult);
  });

  it("should return correct payload sortProductLowPrice", () => {
    const data = [5, 4, 3, 2, 1];
    const expectedResult = {
      type: SORT_PRODUCT_LOW_PRICE,
      data,
    };

    expect(sortProductLowPrice(data)).toEqual(expectedResult);
  });
});
