import StepOne from "@/components/stepOne";
import Button from "@/components/button";
import { useRef } from "react";
const Home = () => {
  const formRef = useRef(null);
  const handleNextClick = () => {
    console.log("next clicked");
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };
  return (
    <div className="flex w-screen h-screen p-4 ">
      <div className="bg-black w-[35%] h-full rounded-lg"></div>
      <div className="px-20 pt-20 pb-5 border-2 w-full flex flex-col justify-between">
        <StepOne ref={formRef} />
        <Button handleNextClick={handleNextClick} />
      </div>
    </div>
  );
};
export default Home;
