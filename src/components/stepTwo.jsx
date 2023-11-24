import classNames from "classnames";
import { useState } from "react";
const StepTwo = ({ setStep2State, setStep2Contact, prevSelectedPlan }) => {
  const cards = [
    { option: "Easy", amount: 9 },
    { option: " Medium", amount: 12 },
    { option: " Hard", amount: 15 },
  ];
  const [selectCard, setSelectCard] = useState(prevSelectedPlan || "");
  const handleCardSelect = (index) => {
    const selectedCardText = cards[index].option;
    setSelectCard(selectedCardText);
    setStep2Contact(selectedCardText);
    setStep2State(true);
  };

  return (
    <div className=" flex flex-col gap-2 border-2 ">
      <h1 className="text-3xl font-bold">Select your Plan</h1>
      <p className="mb-12 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="flex gap-4 ">
        {cards.map((card, index) => (
          <button
            key={index}
            className={classNames(
              "border-2 p-4 w-[120px] h-[150px] rounded-lg",
              { "border-blue-500": selectCard === card.option }
            )}
            onClick={() => handleCardSelect(index)}
          >
            <div className="w-8 h-8 rounded-full bg-black mb-8"></div>
            <h2 className="text-md font-bold">{card.option}</h2>
            <p className="text-slate-400 text-sm">${card.amount}/mo</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
