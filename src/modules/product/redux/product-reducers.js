// @flow

import produce from "immer";
import {
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
  SORT_PRODUCT_HIGH_PRICE,
  SORT_PRODUCT_LOW_PRICE,
} from "./product-actions";

export const initialState = {
  loaded: false,
  error: false,
  data: [],
  metadata: {},
};

/**
 * Reducer product modules
 * in this state we can modify the data based on users
 * interactive with filter button.
 * @param {Object} state
 * @param {Function} action
 */
function reducer(state = initialState, action: Function) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PRODUCT_SUCCESS:
        draft.loaded = true;
        draft.data = action.results;
        draft.metadata = action.metadata;
        break;

      case LOAD_PRODUCT_ERROR:
        draft.error = action.error;
        break;

      case SORT_PRODUCT_HIGH_PRICE:
        draft.data = action.data
          .slice()
          .sort((a, b) => b.salePrice - a.salePrice);
        break;

      case SORT_PRODUCT_LOW_PRICE:
        draft.data = action.data
          .slice()
          .sort((a, b) => a.salePrice - b.salePrice);
        break;
    }
  });
}

export default reducer;
