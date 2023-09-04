import styles from "../components/PrimaryButton/PrimaryButton.module.css";
import Sm from "@/components/Sm";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const GetStarted = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const [selectedData, setSelectedData] = useState([]);

  const handleClick = () => {
    if (selectedData.length > 0) {
      router.push("/select-gender");
    } else {
      toast.error("Please select a social media platform");
    }
  };

  return (
    <div>
      <Sm selectedData={selectedData} setSelectedData={setSelectedData} />
      <div className="flex justify-center mt-[8rem] mb-[2rem] gap-[2rem]">
        <button
          onClick={goBack}
          className={`${styles.buttonInverted} shadow-lg shadow-blue-500/50 border-[5px] lg:border-[1px] border-solid  border-[#d0d7e7] medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem]`}
        >
          Back
        </button>
        <button
          type="submit"
          className={`${styles.button} shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem]`}
          onClick={() => handleClick()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
