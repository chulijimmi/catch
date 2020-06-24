import React, { Profiler } from "react";
import Container from "../../../layouts/component/layout-container";
import Card from "./product-card";
import ProductFilter from "./product-filter";
import { useTranslation } from "react-i18next";

/**
 * ProductCardLoading only render if
 * data not loaded
 */
export function ProductCardLoading() {
  return (
    <Card.Col data-testid="product-card-loading">
      <Card.Link>
        <Card.Sold></Card.Sold>
        <Card.Content>
          <Card.ImageLoading />
          <Card.InfoProduct>
            <Card.ProductTitleLoading />
            <Card.ProductPriceLoading />
            <Card.ProductPriceLoading />
          </Card.InfoProduct>
        </Card.Content>
      </Card.Link>
    </Card.Col>
  );
}

/**
 * Product Card should render data from results response api
 * related with reducers product.
 * Requirement:
 * data.quantityAvailable == 0 then show Card.Sold
 * data.retailPrice !== 0 then Card.ProductRetail show
 * @param {Array} data
 */
export function ProductCard({ data, t }) {
  return (
    <Card.Col data-testid="product-card">
      <Card.Link>
        {data.quantityAvailable == 0 ? (
          <Card.Sold data-testid="product-sold">
            {t("nsProduct:sold")}
          </Card.Sold>
        ) : null}

        <Card.Content>
          <Card.Image data-testid="product-card-image"></Card.Image>
          <Card.InfoProduct>
            <Card.ProductTitle data-testid="product-card-title"></Card.ProductTitle>
            {data.retailPrice !== 0 ? (
              <Card.ProductRetail data-testid="product-card-retail" />
            ) : null}
            <Card.ProductPrice data-testid="product-card-price"></Card.ProductPrice>
          </Card.InfoProduct>
        </Card.Content>
      </Card.Link>
    </Card.Col>
  );
}

/**
 * Render product screen
 * related data with reducers and action filter
 * reducers: product,
 * actions: { sortProductHighPrice, sortProductLowPrice}
 */
export function ProductContainer({
  product,
  sortProductHighPrice,
  sortProductLowPrice,
  t,
}) {
  return (
    <Profiler id="ProductScreen" onRender={() => {}}>
      <Container>
        <ProductFilter />
      </Container>
      <Container>
        {product && product.loaded
          ? product.data.map((item) => (
              <ProductCard data={item} key={item.id} t={t} />
            ))
          : [0, 1, 2, 3].map((item) => (
              <ProductCardLoading key={item.toString()} />
            ))}
      </Container>
    </Profiler>
  );
}

function ProductScreen(props) {
  return <ProductContainer {...props} />;
}

export default ProductScreen;
