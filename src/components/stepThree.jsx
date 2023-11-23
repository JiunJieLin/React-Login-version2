const StepThree = () => {
  const services = [
    {
      title: "Online service",
      content: "Access to multiplayer games",
      amount: 1,
    },
    {
      title: "Larger storage",
      content: "Extra 1TB of cloud save",
      amount: 2,
    },
    {
      title: "Customization profile",
      content: "Custom theme on your proofile",
      amount: 2,
    },
  ];
  return (
    <div className=" flex flex-col gap-2 ">
      <h1 className="text-3xl font-bold">Pick add-ons</h1>
      <p className="mb-12 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 flex border-2 justify-between items-center rounded-lg"
          >
            <div className="flex gap-6 items-center">
              <input type="checkbox" className="w-6 h-6" />
              <div className="flex  flex-col">
                <h2 className="text-lg font-bold">{service.title}</h2>
                <p className="text-lg text-slate-400">{service.content}</p>
              </div>
            </div>

            <p>+${service.amount}/mo</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
