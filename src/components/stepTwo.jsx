import classNames from "classnames";
const StepTwo = () => {
  const cards = [
    { option: "Easy", amount: 9 },
    { option: " Medium", amount: 12 },
    { option: " Hard", amount: 15 },
  ];
  return (
    <div className=" flex flex-col gap-2 border-2 ">
      <h1 className="text-3xl font-bold">Select your Plan</h1>
      <p className="mb-12 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="flex gap-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-2 p-4 w-[120px] h-[150px] rounded-lg"
          >
            <div className="w-8 h-8 rounded-full bg-black mb-8"></div>
            <h2 className="text-md font-bold">{card.option}</h2>
            <p className="text-slate-400 text-sm">${card.amount}/mo</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
