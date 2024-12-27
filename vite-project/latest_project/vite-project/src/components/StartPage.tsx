//import React from 'react'
import { ReactNode } from "react";

interface StartPageProps {
  children: ReactNode;
}
export const StartPage = ({ children }: StartPageProps) => {
  return <div>StartPage {children} </div>;
};
export default StartPage;
