// @flow

/**
 * Constant Defined
 */
export const LOAD_PRODUCT = "product/load_product";
export const LOAD_PRODUCT_SUCCESS = "product/load_product_success";
export const LOAD_PRODUCT_ERROR = "product/load_product_error";
export const SORT_PRODUCT_HIGH_PRICE = "product/sort_product_high_price";
export const SORT_PRODUCT_LOW_PRICE = "product/sort_product_low_price";

// Call actions fetch data product
export const loadProduct = () => ({
  type: LOAD_PRODUCT,
});

/**
 * Call actions to dispatch data from response in reducers product
 * @param {Array} results
 * @param {Object} metadata
 */
export const loadProductSuccess = (results: Array, metadata: Object) => ({
  type: LOAD_PRODUCT_SUCCESS,
  results,
  metadata,
});

/**
 * Set error when has failed response or no data available
 * @param {Object} error
 */
export const loadProductError = (error: Object) => ({
  type: LOAD_PRODUCT_ERROR,
  error,
});

/**
 * Sort price product from high to low in data reducers
 * @param {Array} data
 */
export const sortProductHighPrice = (data: Array) => ({
  type: SORT_PRODUCT_HIGH_PRICE,
  data,
});

/**
 * Sort price product from low to high in data reducers
 * @param {Array} data
 */
export const sortProductLowPrice = (data: Array) => ({
  type: SORT_PRODUCT_LOW_PRICE,
  data,
});
