const SideInfo = () => {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-4">
            {index + 1}
          </div>
          <div className="text-white">
            <p className="text-sm">STEP{index + 1}</p>
            <h2>{step}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideInfo;
