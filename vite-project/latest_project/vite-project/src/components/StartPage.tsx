//import React from 'react'
import { ReactNode } from "react";

interface StartPageProps {
  children: ReactNode;
  quizTopic: string;
  quizAuthor?: string;
  modifiedDate?: string;
}
export const StartPage = ({
  children,
  quizTopic,
  quizAuthor,
  modifiedDate,
}: StartPageProps) => {
  return (
    <div>
      <h2>Quiz topic: {quizTopic}</h2>
      {children}
      <p></p>
      <h5>Author: {quizAuthor}</h5>
      <h6>Modified date: {modifiedDate}</h6>
    </div>
  );
};
export default StartPage;
