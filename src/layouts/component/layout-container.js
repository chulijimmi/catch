/** @jsx jsx */
import styled from "@emotion/styled";
import { phone, ipad, desktop } from "../style/style-query";

/**
 * Container Component
 */
const Container = styled.div`
  margin: 0px 80px;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  ${ipad} {
    margin: 0px 30px;
  }
  ${phone} {
    margin: 0px 15px;
  }
`;

export default Container;
