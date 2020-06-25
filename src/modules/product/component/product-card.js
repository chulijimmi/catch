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

/**
 * Card Render Component
 */
const Col = styled.div`
  display: inline-flex;
  justify-content: space-between;
  max-width: 25%;
  flex: 0 1 25%;
  ${desktopLarge} {
    max-width: 20%;
    flex: 0 1 20%;
  }
  ${ipad} {
    max-width: 33%;
    flex: 0 1 33%;
  }
  ${phone} {
    max-width: 50%;
    flex: 0 1 50%;
  }
`;

const Link = styled.div`
  position: relative;
  display: inline-flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2.5%;
`;

const Sold = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  width: 100px;
  padding: 15px;
  z-index: 1;
  border-radius: 5px;
  background: ${colors.red};
  display: block;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px;
  min-width: 100%;
  border-radius: 5px;
`;

const Image = ({ imageUrl }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: auto;
      `}
    >
      <img
        css={css`
          width: 100%;
          height: 200px;
          object-fit: cover;
          object-position: 50% 50%; /* default value: image is centered*/
          object-position: 0 0; /* positioned top left of the content box */
          border-radius: 4px;
        `}
        src={imageUrl}
      />
    </div>
  );
};

const InfoProduct = styled.div`
  width: 100%;
  height: 240px;
`;

const ProductTextArea = styled.div`
  width: 100%;
  padding: 10px 0px;
  max-height: 60px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const ProductTitle = styled.h3`
  text-align: center;
  margin: 15px 10%;
  font-weight: 400;
`;

const ProductRetail = styled.h4`
  text-align: center;
  margin: 15px 10%;
  font-weight: 400;
  display: ${(props) => (props.show ? "block" : "none")};
  text-decoration: line-through;
  color: ${colors.red};
`;

const ProductPrice = styled.h1`
  text-align: center;
  margin: 15px 10%;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  color: ${colors.blue};
`;

/***
 * Card Loading Component
 */
const ImageLoading = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 150px;
        animation: ${animatedGrey} 2s linear infinite;
      `}
    ></div>
  );
};

const ProductTitleLoading = () => {
  return (
    <div
      css={css`
        margin: 15px 10%;
        width: 80%;
        height: 34px;
        border-radius: 5px;
        animation: ${animatedOrange} 2s linear infinite;
      `}
    ></div>
  );
};

const ProductPriceLoading = () => {
  return (
    <div
      css={css`
        margin: 15px 10%;
        width: 70%;
        height: 20px;
        border-radius: 5px;
        animation: ${animatedGrey} 2s linear infinite;
      `}
    ></div>
  );
};

/**
 * Keyframe Animation card related with colors name
 */
const animatedGrey = keyframes`
0%     {background-color: ${colors.grey};}
50.0%  {background-color: ${colors.greyLight}}
100.0%  {background-color: ${colors.grey}}
`;

const animatedOrange = keyframes`
0%     {background-color: ${colors.orangeLight};}
50.0%  {background-color: ${colors.orangeSoft}}
100.0%  {background-color: ${colors.orangeLight}}
`;

export default {
  Col,
  Link,
  Sold,
  Content,
  Image,
  ImageLoading,
  InfoProduct,
  ProductTextArea,
  ProductTitle,
  ProductTitleLoading,
  ProductRetail,
  ProductPrice,
  ProductPriceLoading,
};
