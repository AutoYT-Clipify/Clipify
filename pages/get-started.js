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
  const fetchData = () => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    return data;
  };
  // const modifyDataAtIndex = (index, newData) => {
  //   const data = JSON.parse(localStorage.getItem("data") || "[]");
  //   if (data.length > index) {
  //     data[index] = { ...data[index], ...newData }; // Merge old and new data
  //     localStorage.setItem("data", JSON.stringify(data));
  //   }
  // };
  const modifyLastData = (newData) => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const lastIndex = data.length - 1;

    if (lastIndex >= 0) {
      data[lastIndex] = { ...data[lastIndex], ...newData }; // Merge old and new data for the last item
      localStorage.setItem("data", JSON.stringify(data));
    }
  };

  const handleClick = () => {
    if (selectedData.length > 0) {
      console.log(selectedData);

      modifyLastData({ selected_social_media: selectedData });
      let data = fetchData();
      console.log(data);
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
