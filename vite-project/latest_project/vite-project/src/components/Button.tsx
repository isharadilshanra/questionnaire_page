//import React from 'react'

// const handleFinish = () => {
//   console.log("Finished");
// };

// make button re usable
interface ButtonProps {
  onSubmit: () => void;
  buttonType: string;
}

export const submitButton = ({ onSubmit, buttonType }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-success" onClick={onSubmit}>
      {buttonType}
    </button>
  );
};
export default submitButton;
