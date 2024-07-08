import ReactDOM from "react-dom";
import { Overlay } from "./style";

type LoaderProps = {
    isLoading: boolean;
    size?: string;
    fullScreen?: boolean;
};

export function Loader({ isLoading, size, fullScreen }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  if (fullScreen) {
    return ReactDOM.createPortal(
      <Overlay fullScreen={fullScreen} size={size}>
        <div className="loader" />
      </Overlay>,
            document.getElementById("loader-root")!,
    );
  }
}
