import "./styles/Infinite-bar-loader.css";

export interface InfiniteBarLoaderProps {
  width?: "sm" | "md" | "lg";
  loaderColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  animationDuration?: number;
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
}) => {
  return (
    <div
      className="infinite-bar-loader"
      style={
        {
          ...sizes[width],
          backgroundColor: backgroundColor,
          "--before-border-color": borderColor,
        } as unknown as React.CSSProperties
      }
    >
      <div
        className={`infinite-bar-loader__bar`}
        style={{
          backgroundColor: loaderColor,
          animationDuration: `${animationDuration}s`,
        }}
      ></div>
    </div>
  );
};

export default InfiniteBarLoader;
