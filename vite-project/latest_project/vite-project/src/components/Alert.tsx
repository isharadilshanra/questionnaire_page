// import React from "react";
// rafce
import { ReactNode } from "react";

interface AlertProps {
  // message: string;
  // type: "success" | "danger" | "warning";
  //text: string;
  //children: string;
  children: ReactNode; // for more complex components by using ReactNode
}

export const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-success">Alert: {children}</div>;
};

export default Alert;
