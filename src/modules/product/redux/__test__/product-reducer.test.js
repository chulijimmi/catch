import reducer, { initialState } from "../product-reducers";
import {
  loadProductSuccess,
  loadProductError,
  sortProductHighPrice,
  sortProductLowPrice,
} from "../product-actions";
import responseJson from "./response.json";
import produce from "immer";

describe("product-reducer test", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("should produce default state", () => {
    expect(reducer(state, {})).toEqual(initialState);
  });

  it("should produce if receive response data from api", () => {
    const expectedResult = produce(state, (draft) => {
      draft.loaded = true;
      (draft.data = responseJson.results),
        (draft.metadata = responseJson.metadata);
    });

    expect(
      reducer(
        state,
        loadProductSuccess(responseJson.results, responseJson.metadata)
      )
    ).toEqual(expectedResult);
  });

  it("should produce error when failed get response", () => {
    const error = { status: 401, statusText: "Page not found" };
    const expectedResult = produce(state, (draft) => {
      draft.error = error;
    });
    expect(reducer(state, loadProductError(error))).toEqual(expectedResult);
  });

  it("should produce sort price data product from high to low", () => {
    const expectedResult = produce(state, (draft) => {
      draft.data = responseJson.results
        .slice()
        .sort((a, b) => b.salePrice - a.salePrice);
    });

    expect(reducer(state, sortProductHighPrice(responseJson.results))).toEqual(
      expectedResult
    );
  });

  it("should produce sort price data product from low to high", () => {
    const expectedResult = produce(state, (draft) => {
      draft.data = responseJson.results
        .slice()
        .sort((a, b) => a.salePrice - b.salePrice);
    });

    expect(reducer(state, sortProductLowPrice(responseJson.results))).toEqual(
      expectedResult
    );
  });
});
