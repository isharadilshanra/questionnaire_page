//import React from 'react'

const handleFinish = () => {
  console.log("Finished");
};

export const submitButton = () => {
  return (
    <button type="button" className="btn btn-success" onClick={handleFinish}>
      Submit
    </button>
  );
};
export default submitButton;
