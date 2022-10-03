import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IPortalProps } from "./Portal.props";

const Portal = ({ children }: IPortalProps): JSX.Element => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
