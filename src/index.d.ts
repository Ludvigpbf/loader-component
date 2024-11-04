declare module "@flyckt-coding/loaders" {
  export interface SpinnerLoaderProps {
    size?: "sm" | "md" | "lg";
    spinnerColor?: string;
    backgroundColor?: string;
  }

  export interface DotsLoaderProps {
    dotsNumbers: number;
    dotColor: string;
    dotSize: number;
    dotMargin: number;
  }

  export interface InfiniteBarLoaderProps {
    width?: "sm" | "md" | "lg";
    loaderColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    animationDuration?: number;
  }

  export function SpinnerLoader(props: SpinnerLoaderProps): JSX.Element;
  export function DotsLoader(props: DotsLoaderProps): JSX.Element;
  export function InfiniteBarLoader(props: InfiniteBarLoaderProps): JSX.Element;
}
