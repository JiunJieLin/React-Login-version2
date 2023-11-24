const Button = ({ handleNextClick, handlePrevClick, currentStep }) => {
  const isPrevDisabled = currentStep === 1;
  const isNextDisabled = currentStep === 4;
  return (
    <div className="flex border-2 justify-between ">
      <button onClick={handlePrevClick} disabled={isPrevDisabled}>
        Go Back
      </button>
      <button
        onClick={handleNextClick}
        className="bg-blue-950 text-white rounded-lg px-6 py-3 "
        disabled={isNextDisabled}
      >
        Next Step
      </button>
    </div>
  );
};

export default Button;
