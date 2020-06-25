import { useEffect, memo } from "react";

import { useTranslation } from "react-i18next";

//Language injector
import { injectLanguage } from "../../../libutils/injectLanguage";
import language from "../language";

// Reducer and action injector
import { useInjectReducer } from "../../../libutils/injectReducer";
import reducer from "../redux/product-reducers";
import {
  loadProduct,
  sortProductHighPrice,
  sortProductLowPrice,
} from "../redux/product-actions";

// Saga injector
import { useInjectSaga } from "../../../libutils/injectSaga";
import saga from "../redux/product-sagas";

// Component related
import ProductScreen from "./product-screen";
import { connect } from "react-redux";
import { compose } from "redux";

const useFetchProduct = (sagaTask) => {
  useEffect(() => {
    sagaTask();
  }, []);
};

/**
 * InjectedComponent function to connect with injected reducers,
 * saga side effects, and internationalize language
 */
export function InjectedComponent(props) {
  const { loadProduct } = props;
  const key = "product";
  const { t, i18n } = useTranslation(["nsHome"]);
  injectLanguage(language);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useFetchProduct(loadProduct);
  return ProductScreen({ t, ...props });
}

// Mapping state reducer
const mapStateToProps = ({ product }) => ({ product });

// Dispatch action creator
const mapDispatchToProps = {
  loadProduct,
  sortProductHighPrice,
  sortProductLowPrice,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(InjectedComponent);
