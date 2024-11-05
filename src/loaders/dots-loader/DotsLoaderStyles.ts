/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const DotsWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const dotPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

export const DotsLoaderStyle = css`
  animation: ${dotPulse} 1.5s infinite ease-in-out;
  border-radius: 50%;
`;

