import StepOne from "@/components/stepOne";
import Button from "@/components/button";
import SideInfo from "@/components/sideInfo";
import StepTwo from "@/components/stepTwo";
import StepThree from "@/components/stepThree";
import { useRef, useState } from "react";
import Summary from "@/components/summary";
const Home = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const formRef = useRef(null);
  const handleNextClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };
  const handlePrevClick = () => {
    setCurrentActive((prev) => prev - 1);
  };
  return (
    <div className="flex w-screen h-screen p-4 ">
      <div className="bg-blue-500 w-[35%] h-full rounded-lg p-8 ">
        <SideInfo currentStep={currentActive} />
      </div>
      <div className="px-20 pt-20 pb-5 border-2 w-full flex flex-col justify-between">
        {currentActive === 1 && (
          <StepOne ref={formRef} setCurrentActive={setCurrentActive} />
        )}
        {currentActive === 2 && <StepTwo />}
        {currentActive === 3 && <StepThree />}
        {currentActive === 4 && <Summary />}

        <Button
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      </div>
    </div>
  );
};
export default Home;
