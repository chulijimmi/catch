/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import {
  desktopLarge,
  desktop,
  ipad,
  phone,
} from "../../../layouts/style/style-query";
import colors from "../../../layouts/style/style-colors";

const ProductFilter = styled.div`
  flex: 1;
  width: 100%;
  height: 100px;
  background: ${colors.greyLight};
`;

export default ProductFilter;
