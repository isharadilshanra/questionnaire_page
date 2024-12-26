//import React from 'react'

// const handleFinish = () => {
//   console.log("Finished");
// };

// make button re usable
interface ButtonProps {
  onSubmit: () => void;
  buttonType: string;
  color?: "primary" | "secondary" | "success" | "danger";
}

export const submitButton = ({ onSubmit, buttonType, color }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onSubmit}>
      {buttonType}
    </button>
  );
};
export default submitButton;
