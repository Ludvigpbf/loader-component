import "./styles/Spinner-loader.css";

export interface SpinnerLoaderProps {
  size?: "sm" | "md" | "lg";
  spinnerColor?: string;
  backgroundColor?: string;
}

const small = {
  width: "20px",
  height: "20px",
};
const medium = {
  width: "40px",
  height: "40px",
};
const large = {
  width: "60px",
  height: "60px",
};

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  size,
  backgroundColor,
  spinnerColor,
}) => {
  return (
    <div className="spinner-loader">
      <div
        className={`spinner-loader__spinner`}
        style={
          (size === "sm"
            ? small
            : size === "md"
            ? medium
            : size === "lg"
            ? large
            : {}) && {
            borderColor: backgroundColor,
            borderTopColor: spinnerColor,
          }
        }
      ></div>
    </div>
  );
};

export default SpinnerLoader;
