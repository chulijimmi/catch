import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
  LOAD_PRODUCT,
  loadProductSuccess,
  loadProductError,
} from "./product-actions";
import request, { requestGetOption } from "../../../libutils/request";

export function* fetchProduct() {
  try {
    const url = "challenge-3/response.json";
    const options = requestGetOption();
    const response = yield call(request, url, options);
    yield put(loadProductSuccess(response.results, response.metadata));
  } catch (error) {
    yield put(loadProductError(error));
  }
}

export function* getProduct() {
  yield takeLatest(LOAD_PRODUCT, fetchProduct);
}

export default function* rootSaga() {
  yield all([fork(getProduct)]);
}
