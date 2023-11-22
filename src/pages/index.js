import FormField from "@/components/formField";
import { useState } from "react";
const Home = () => {
  return (
    <div className="flex w-screen h-screen p-4 ">
      <div className="bg-black w-[30%] h-full rounded-lg"></div>
      <div className="px-20 py-20 border-2 w-full flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Personal info</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
        <form>
          <FormField />
          <FormField />
          <FormField />
          <FormField />
        </form>
        <button>Next Step</button>
      </div>
    </div>
  );
};
export default Home;
{
  /* <div>
    <label htmlFor="email">Email Address</label>
    <input type="text" placeholder="kimliu@lorem.com" />
  </div>
  <div>
    <label htmlFor="phone">Phone</label>
    <input type="number" placeholder="09xxxxxxxx" />
  </div> */
}
