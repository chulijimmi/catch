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

const FilterContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: auto;
  margin: 15px 0.5%;
  justify-content: space-between;
`;

const LogoArea = styled.div`
  width: 300px;
  height: 100px;
  background: ${colors.red};
`;

const FilterButtonArea = styled.div`
  width: 200px;
  height: auto;
  position: relative;
`;

const FilterButtonWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
`;

export { LogoArea, FilterButtonArea, FilterButtonWrapper };

export default FilterContainer;
