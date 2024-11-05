/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

/* export const SpinnerLoaderStyles = css``; */

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoaderStyles = css`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #292a2b;
  border-radius: 50%;
  animation: ${spin} 1.3s ease infinite;
`;

export const sizes = {
    sm: css`
      width: 20px;
      height: 20px;
    `,
    md: css`
      width: 40px;
      height: 40px;
    `,
    lg: css`
      width: 60px;
      height: 60px;
    `,
  };