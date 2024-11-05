/** @jsxImportSource @emotion/react */
import { DotsWrapperStyle, DotsLoaderStyle } from "./DotsLoaderStyles";

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
  dotSize,
  dotColor,
  dotPadding,
  dotMargin,
}) => {
  const dots = Array.from({ length: dotsNumbers }, (_, index) => (
    <div
      key={index}
      css={[
        DotsLoaderStyle,
        {
          animationDelay: `${index * 0.2}s`,
          width: `${dotSize ? dotSize : 10}px`,
          height: `${dotSize ? dotSize : 10}px`,
          backgroundColor: `${dotColor ? dotColor : "gray"}`,
          padding: `${dotPadding ? dotPadding : 5}px`,
          margin: `${dotMargin ? dotMargin : 10}px`,
        },
      ]}
      className={loaderClassName}
    ></div>
  ));

  return (
    <div css={DotsWrapperStyle} className={wrapperClassName}>
      {dots}
    </div>
  );
};

export default DotsLoader;
