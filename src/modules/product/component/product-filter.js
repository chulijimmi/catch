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
import logo from "../../../images/logo.svg";

const FilterContainer = styled.div`
  flex: 1 1;
  display: flex;
  width: 100%;
  height: auto;
  margin: 15px 0.5%;
  justify-content: space-between;
`;

const LogoArea = () => {
  return (
    <div
      css={css`
        width: 300px;
        height: 100px;
      `}
    >
      <img
        css={css`
          width: 100%;
          height: 100%;
        `}
        src={`${logo}`}
      />
    </div>
  );
};

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
