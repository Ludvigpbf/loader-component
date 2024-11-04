import "./styles/Dots-loader.css";

interface DotsProps {
  wrapperClassName?: string;
  loaderClassName?: string;
  dotsNumbers?: number;
  dotSize?: number;
  dotColor?: string;
  dotPadding?: number;
  dotMargin?: number;
}

const DotsLoader: React.FC<DotsProps> = ({
  wrapperClassName,
  loaderClassName,
  dotsNumbers = 3,
  dotSize = 10,
  dotColor = "gray",
  dotPadding,
  dotMargin,
}) => {
  const dots = Array.from({ length: dotsNumbers }, (_, index) => (
    <div
      key={index}
      className={`dots-loader${loaderClassName ? ` ${loaderClassName}` : ""}`}
      style={{
        animationDelay: `${index * 0.2}s`,
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        backgroundColor: `${dotColor}`,
        padding: `${dotPadding}px`,
        margin: `${dotMargin}px`,
      }}
    ></div>
  ));

  return (
    <div
      className={`dots-container${
        wrapperClassName ? ` ${wrapperClassName}` : ""
      }`}
    >
      {dots}
    </div>
  );
};

export default DotsLoader;
