// rafce
import { ReactNode } from "react";

interface QuectionAlertProps {
  // message: string;
  // type: "success" | "danger" | "warning";
  //text: string;
  //children: string;
  children: ReactNode; // for more complex components by using ReactNode
  typeAlert?:
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "primary"
    | "secondary"
    | "light"
    | "dark";
}

export const Quection = ({ children, typeAlert }: QuectionAlertProps) => {
  return <div className={"alert alert-" + typeAlert}>{children}</div>;
};

export default Quection;
