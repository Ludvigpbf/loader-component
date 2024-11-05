/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";

import {
  infiniteBarWrapperStyle,
  infiniteBarLoaderStyle,
} from "./InfiniteBarStyles";

export interface InfiniteBarLoaderProps {
  width?: "sm" | "md" | "lg";
  loaderColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  animationDuration?: number;
  wrapperClassName?: string;
  loaderClassName?: string;
}

const sizes = {
  sm: { width: "5rem" },
  md: { width: "10rem" },
  lg: { width: "15rem" },
};

const InfiniteBarLoader: React.FC<InfiniteBarLoaderProps> = ({
  width = "md",
  backgroundColor,
  loaderColor,
  borderColor,
  animationDuration,
  wrapperClassName,
  loaderClassName,
}) => {
  return (
    <div
      css={[
        infiniteBarWrapperStyle,
        {
          ...sizes[width],
          backgroundColor: backgroundColor,
          "--before-border-color": borderColor,
        } as CSSObject,
      ]}
      className={wrapperClassName}
    >
      <div
        css={[
          infiniteBarLoaderStyle,
          {
            backgroundColor: loaderColor,
            animationDuration: `${animationDuration}s`,
          },
        ]}
        className={loaderClassName}
      ></div>
    </div>
  );
};

export default InfiniteBarLoader;
