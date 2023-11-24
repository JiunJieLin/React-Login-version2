import classNames from "classnames";
const SideInfo = ({ currentStep }) => {
  const steps = [
    { title: "YOUR INFO", number: 1 },
    { title: "SELECT PLAN", number: 2 },
    { title: "ADD-ONS", number: 3 },
    { title: "SUMMARY", number: 4 },
  ];
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div
            className={classNames(
              "w-6 h-6 rounded-full  flex items-center justify-center p-4 border-2  border-white text-white",
              {
                "bg-blue-900": step.number === currentStep,
                "border-blue-900": step.number === currentStep,
              }
            )}
          >
            {step.number}
          </div>
          <div className="text-white">
            <p className="text-sm">STEP{step.number}</p>
            <h2>{step.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideInfo;
