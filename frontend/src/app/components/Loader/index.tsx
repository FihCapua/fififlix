import ReactDOM from "react-dom";
import { Overlay } from "./style";

export function Loader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById("loader-root")!,
  );
}
