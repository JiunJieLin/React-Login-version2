const Button = ({ handleNextClick, handlePrevClick }) => {
  return (
    <div className="flex border-2 justify-between">
      <button onClick={handlePrevClick}>Go Back</button>
      <button
        onClick={handleNextClick}
        className="bg-blue-950 text-white rounded-lg px-6 py-3"
      >
        Next Step
      </button>
    </div>
  );
};

export default Button;
