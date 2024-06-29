import { SetStateAction, useState } from "react";
import "./Calculator.css";
const NewCalculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [opr, setOpr] = useState("");
    const [oprClicked, setOprClicked] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const [end, setEnd] = useState(false);

    const handleNumbers = (value: string) => {
        if (!oprClicked && opr === "") {
            // false
            // set num1
            setNum1((prevInput) => {
                if (end) {
                    prevInput = "";
                }
                return prevInput === "0" || prevInput === ""
                    ? value
                    : prevInput + value;
            });
        } else {
            // true
            // set num2
            setNum2((prevInput) =>
                prevInput === "0" || prevInput === ""
                    ? value
                    : prevInput + value
            );
        }
    };

    const handleClear = () => {
        setNum1("");
        setNum2("");
        setOpr("");
        setOprClicked(false);
        // setResult("");
    };

    const handlePercentageOperator = () => {
        setNum1((prevNum1) => {
            return (Number(prevNum1) / 100).toString();
        });
    };

    const handleMinusOperator = () => {
        setNum1((prevNum1) => {
            return (Number(prevNum1) * -1).toString();
        });
    };

    const handleDotOperator = () => {
        if (!oprClicked && opr === "") {
            setNum1((prevNum1) => {
                return prevNum1.split(".").length === 1
                    ? Number(prevNum1).toString() + "."
                    : Number(prevNum1).toString();
            });
        } else {
            setNum2((prevNum2) => {
                return prevNum2.split(".").length === 1
                    ? Number(prevNum2).toString() + "."
                    : Number(prevNum2).toString();
            });
        }
    };

    const handleOperator = (value: SetStateAction<string>) => {
        setOprClicked(true);
        setOpr(value);

        const handleOpe = opr === "" ? value : opr;

        switch (handleOpe) {
            case "/":
                setNum1((prevNum1) => {
                    const tempNum2 = num2 === "" ? 1 : num2;
                    return (Number(prevNum1) / Number(tempNum2)).toString();
                });
                break;
            case "*":
                setNum1((prevNum1) => {
                    const tempNum2 = num2 === "" ? 1 : num2;
                    return (Number(prevNum1) * Number(tempNum2)).toString();
                });
                break;
            case "+":
                setNum1((prevNum1) => {
                    return (Number(prevNum1) + Number(num2)).toString();
                });
                break;
            case "-":
                setNum1((prevNum1) => {
                    return (Number(prevNum1) - Number(num2)).toString();
                });
                break;

            default:
                setNum1("0");
                break;
        }
        setNum2("");
    };

    const showResult = () => {
        if (!oprClicked) {
            return num1 === "" ? "0" : num1;
        } else if (oprClicked) {
            return num2 === "" ? (num1 === "" ? num2 : num1) : num2;
        }
    };

    return (
        <div className="text-white absolute left-2 top-[10px] w-[95%] rounded-[30px] h-[97%] bg-black flex flex-col justify-end items-start px-2  py-[40px]">
            <div className="w-full rounded-[70px] bg-black  ">
                <div className="overflow-x-auto overflow-y-hidden text-[51px] mb-[20px] pr-[12px] pb-[50px] bg-black text-right rounded-[8px] h-[90px]">
                    {/* show result  */}
                    {showResult()}
                </div>
                <div className="grid grid-cols-4 gap-[9px]">
                    <button
                        className="calcBtn bg-neutral-400	 text-black"
                        onClick={handleClear}>
                        AC
                    </button>
                    <button
                        className="calcBtn bg-neutral-400	 text-black"
                        onClick={handleMinusOperator}>
                        <span>+</span>
                        <span>/</span>
                        <span>-</span>
                    </button>
                    <button
                        className="calcBtn bg-neutral-400	 text-black "
                        onClick={handlePercentageOperator}>
                        %
                    </button>
                    <button
                        className={`operator pb-1 ${
                            oprClicked && opr === "/" ? "" : "opactiy"
                        }`}
                        onClick={() => handleOperator("/")}>
                        /
                    </button>

                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("7")}>
                        7
                    </button>
                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("8")}>
                        8
                    </button>
                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("9")}>
                        9
                    </button>
                    <button
                        className={`operator pt-2 ${
                            oprClicked && opr === "*" ? "" : "opactiy"
                        }`}
                        onClick={() => handleOperator("*")}>
                        *
                    </button>

                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("4")}>
                        4
                    </button>
                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("5")}>
                        5
                    </button>
                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("6")}>
                        6
                    </button>
                    <button
                        className={`operator ${
                            oprClicked && opr === "-" ? "" : "opactiy"
                        }`}
                        onClick={() => handleOperator("-")}>
                        <div className="bg-white w-[20px] h-1 m-auto "></div>
                    </button>

                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("1")}>
                        1
                    </button>
                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("2")}>
                        2
                    </button>
                    <button
                        className="calcBtn"
                        onClick={() => handleNumbers("3")}>
                        3
                    </button>
                    <button
                        className={`operator ${
                            oprClicked && opr === "+" ? "" : "opactiy"
                        }`}
                        onClick={() => handleOperator("+")}>
                        +
                    </button>
                </div>
                <div className="flex justify-between  items-center mt-[10px] w-[99%]">
                    <button className="zero" onClick={() => handleNumbers("0")}>
                        0
                    </button>
                    <button className="calcBtn" onClick={handleDotOperator}>
                        .
                    </button>
                    <button
                        className="operator opactiy"
                        onClick={() => {
                            handleOperator(opr);
                        }}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewCalculator;
