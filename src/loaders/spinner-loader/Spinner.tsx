/** @jsxImportSource @emotion/react */
import { SpinnerLoaderStyles, sizes } from "./SpinnerLoaderStyles";

export interface SpinnerLoaderProps {
  size?: "sm" | "md" | "lg";
  spinnerColor?: string;
  backgroundColor?: string;
}

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  size,
  backgroundColor,
  spinnerColor,
}) => {
  return (
    <div className="spinner-loader">
      <div
        css={[
          SpinnerLoaderStyles,
          sizes[size ? size : "md"],
          {
            borderColor: `${backgroundColor ? backgroundColor : "#f3f3f3"}`,
            borderTopColor: `${spinnerColor ? spinnerColor : "#292a2b"}`,
          },
        ]}
      ></div>
    </div>
  );
};

export default SpinnerLoader;
