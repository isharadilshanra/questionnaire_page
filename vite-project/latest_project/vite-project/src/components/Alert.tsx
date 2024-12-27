// rafce
import { ReactNode } from "react";

interface AlertProps {
  // message: string;
  // type: "success" | "danger" | "warning";
  //text: string;
  //children: string;
  onCloseClick: () => void;
  children: ReactNode; // for more complex components by using ReactNode
  typeAlert?: "success" | "danger" | "warning";
}

export const Alert = ({ children, typeAlert, onCloseClick }: AlertProps) => {
  return (
    <div
      className={"alert alert-" + typeAlert + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseClick}
      ></button>
    </div>
  );
};

export default Alert;
