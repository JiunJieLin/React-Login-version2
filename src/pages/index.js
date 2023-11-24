import StepOne from "@/components/stepOne";
import Button from "@/components/button";
import SideInfo from "@/components/sideInfo";
import StepTwo from "@/components/stepTwo";
import StepThree from "@/components/stepThree";
import { useRef, useState, useEffect } from "react";
import Summary from "@/components/summary";
const Home = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const [formError, setFormError] = useState(false);
  const [step1Contact, setStep1Contact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [prevEnteredValue, setPrevEnteredValue] = useState({});
  const [step2State, setStep2State] = useState(false);
  const [step2Contact, setStep2Contact] = useState("");
  const [prevSelectedPlan, setPrevSelectedPaln] = useState("");
  const formRef = useRef(null);
  useEffect(() => {
    console.log(step1Contact);
  }, [step1Contact]);
  const handleNextClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    } else if (currentActive === 2 && !step2State) {
      setFormError(true);
    } else if (currentActive === 2 && step2State) {
      setCurrentActive((prev) => prev + 1);
      setStep2State(false);
      setFormError(false);
    }
  };
  const handlePrevClick = () => {
    setCurrentActive((prev) => prev - 1);
    setStep1Contact(prevEnteredValue);
    setPrevSelectedPaln(step2Contact);
    setFormError(false);
  };
  return (
    <div className="flex w-screen h-screen p-4 ">
      <div className="bg-blue-500 w-[35%] h-full rounded-lg p-8 ">
        <SideInfo currentStep={currentActive} />
      </div>
      <div className="px-20 pt-20 pb-5 border-2 w-full flex flex-col justify-between">
        {currentActive === 1 && (
          <StepOne
            ref={formRef}
            setCurrentActive={setCurrentActive}
            setStep1Contact={setStep1Contact}
            setPrevEnteredValue={setPrevEnteredValue}
            prevEnteredValue={prevEnteredValue}
          />
        )}
        {currentActive === 2 && (
          <StepTwo
            setStep2State={setStep2State}
            setStep2Contact={setStep2Contact}
            prevSelectedPlan={prevSelectedPlan}
          />
        )}
        {currentActive === 3 && <StepThree />}
        {currentActive === 4 && <Summary />}

        <Button
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          currentStep={currentActive}
        />
        {formError && step2State === false && (
          <span className="text-md absolute bottom-2 right-4 text-red-500 ">
            請選取一個項目!
          </span>
        )}
      </div>
    </div>
  );
};
export default Home;
