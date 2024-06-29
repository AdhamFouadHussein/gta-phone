import { useState } from "react";
import "./Calculator.css";
import { motion } from "framer-motion";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleBtnClick = (value) => {
    setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="text-white flex flex-col justify-end items-start h-[80vh] mt-[40px]"
    >
      <div className="w-full rounded-[70px] bg-black  ">
        <div className="overflow-x-auto overflow-y-hidden text-[51px] mb-[20px] pb-[50px] bg-black text-right rounded-[8px] h-[90px]">
          {input.replaceAll(" ", "")}
        </div>
        <div className="grid grid-cols-4 gap-[15px]">
          <button
            className="calcBtn bg-neutral-400	 text-black"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="calcBtn bg-neutral-400	 text-black"
            // onClick={() => handleBtnClick("m")}
          >
            <span>+</span>
            <span>/</span>
            <span>-</span>
          </button>
          <button
            className="calcBtn bg-neutral-400	 text-black"
            onClick={() => handleBtnClick(" % ")}
          >
            %
          </button>
          <button
            className="operator pb-1"
            onClick={() => handleBtnClick(" / ")}
          >
            /
          </button>

          <button className="calcBtn" onClick={() => handleBtnClick("7")}>
            7
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick("8")}>
            8
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick("9")}>
            9
          </button>
          <button
            className="operator pt-2"
            onClick={() => handleBtnClick(" * ")}
          >
            *
          </button>

          <button className="calcBtn" onClick={() => handleBtnClick("4")}>
            4
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick("5")}>
            5
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick("6")}>
            6
          </button>
          <button className="operator" onClick={() => handleBtnClick(" - ")}>
            <div className="bg-white w-[20px] h-1 m-auto"></div>
          </button>

          <button className="calcBtn" onClick={() => handleBtnClick("1")}>
            1
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick("2")}>
            2
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick("3")}>
            3
          </button>
          <button className="operator" onClick={() => handleBtnClick(" + ")}>
            +
          </button>
        </div>
        <div className="flex justify-between items-center mt-[10px] w-[101%]">
          <button className="zero" onClick={() => handleBtnClick("0")}>
            0
          </button>
          <button className="calcBtn" onClick={() => handleBtnClick(".")}>
            .
          </button>
          <button className="operator" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator;
