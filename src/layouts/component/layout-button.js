/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/core";
import { desktopLarge, desktop, ipad, phone } from "../style/style-query";
import colors from "../style/style-colors";

const Btn = ({ label, onPress }) => {
  return (
    <button
      css={css`
        width: 100%;
        padding: 15px;
        border: 1px solid ${colors.grey};
        border-radius: 5px;
        &:hover {
          cursor: pointer;
        }
        &:active {
          border: 1px solid ${colors.blue};
        }
      `}
      onClick={onPress}
    >
      {label}
    </button>
  );
};

const propsButton = (prevProps, nextProps) => {
  return prevProps.label === nextProps.label;
};

export const Button = React.memo(Btn, propsButton);

const List = ({ label, onPress }) => {
  return (
    <li
      css={css`
        font-size: 14px;
        margin: 0px;
        padding: 15px;
        &:hover {
          background-color: ${colors.blueSoft};
          cursor: pointer;
        }
      `}
      onClick={onPress}
    >
      <span>{label}</span>
    </li>
  );
};

const propsList = (prevProps, nextProps) => {
  return prevProps.label === nextProps.label;
};

export const ListButton = React.memo(List, propsList);

export const ListPopUp = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      css={css`
        position: absolute;
        background: white;
        width: 100%;
        top: 100px;
        left: 0;
        z-index: 2;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px;
      `}
    >
      <ul
        css={css`
          list-style-type: none;
          margin: 0px;
          padding: 0px;
        `}
      >
        {props.data.map((item, index) => (
          <ListButton
            key={index.toString()}
            onPress={item.onPress}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
});
