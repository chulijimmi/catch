import { getProduct, fetchProduct } from "../product-sagas";
import { takeLatest } from "redux-saga/effects";
import { LOAD_PRODUCT } from "../product-actions";

describe("product-saga test", () => {
  const saga = getProduct();
  it("should start task to watch for LOAD_PRODUCT action", () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_PRODUCT, fetchProduct)
    );
  });
});
