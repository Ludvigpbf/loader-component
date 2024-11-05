/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const borealisBar = keyframes`
  0% {
    left: 0%;
    right: 100%;
    width: 0%;
  }
  10% {
    left: 0%;
    right: 75%;
    width: 25%;
  }
  90% {
    right: 0%;
    left: 75%;
    width: 25%;
  }
  100% {
    left: 100%;
    right: 0%;
    width: 0%;
  }
`;

export const infiniteBarWrapperStyle = css`
  margin: 0 auto;
  border-radius: 0px;
  border: 4px solid transparent;
  position: relative;
  padding: 2px;
  --before-border-color: #fff;

  &:before {
    content: "";
    border: 1px solid var(--before-border-color);
    border-radius: 4px;
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
  }
`;

export const infiniteBarLoaderStyle = css`
  position: absolute;
  border-radius: 10px;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  background: rgb(170, 170, 170);
  width: 0;
  animation: ${borealisBar} 2s linear infinite;
`;