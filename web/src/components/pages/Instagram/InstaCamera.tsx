import { useNavigate } from "react-router-dom";
import cameraWall from "../../assets/images/instaCameroSection.png";
import x from "../../assets/images/x.png";
import { motion } from "framer-motion";

const InstaCamera = () => {
    const navigate = useNavigate();
    return (
        <div className="text-white z-10 relative bg-black px-0 -top-1 left-0 w-[100%] h-[101%] rounded-[30px]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-12 flex justify-between items-center flex-col h-full">
                <img
                    src={x}
                    alt=""
                    className="absolute top-[60px] right-3 h-5 flex justify-center items-center cursor-pointer"
                    onClick={() => navigate("/InstaHome")}
                />
                <div className="w-[96%]">
                    <img src={cameraWall} alt="" />
                </div>
                {/* Camera & Gallery Btn */}
                <div className="text-white  w-full h-[15%] flex justify-around items-start pt-2 gap-5">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 24 24">
                            <path
                                fill="white"
                                d="M18.512 10.077c0 .739-.625 1.338-1.396 1.338c-.77 0-1.395-.6-1.395-1.338c0-.739.625-1.337 1.395-1.337s1.396.598 1.396 1.337"></path>
                            <path
                                fill="white"
                                fillRule="evenodd"
                                d="M18.036 5.532c-1.06-.136-2.414-.136-4.123-.136h-3.826c-1.71 0-3.064 0-4.123.136c-1.09.141-1.974.437-2.67 1.104c-.696.668-1.005 1.514-1.152 2.56C2 10.21 2 11.508 2 13.147v.1c0 1.639 0 2.937.142 3.953c.147 1.045.456 1.891 1.152 2.558c.696.668 1.58.964 2.67 1.104C7.024 21 8.378 21 10.087 21h3.826c1.71 0 3.064 0 4.123-.137c1.09-.14 1.974-.436 2.67-1.104c.696-.667 1.005-1.513 1.152-2.558c.142-1.016.142-2.314.142-3.953v-.1c0-1.64 0-2.937-.142-3.953c-.147-1.045-.456-1.891-1.152-2.559c-.696-.667-1.58-.963-2.67-1.104M6.15 6.858c-.936.12-1.475.347-1.87.724c-.393.378-.629.894-.755 1.791c-.1.72-.123 1.62-.128 2.796l.47-.395c1.125-.943 2.819-.889 3.875.123l3.99 3.825a1.2 1.2 0 0 0 1.491.124l.278-.187a3.606 3.606 0 0 1 4.34.25l2.407 2.078c.098-.264.173-.58.227-.965c.128-.916.13-2.124.13-3.824c0-1.7-.002-2.908-.13-3.825c-.126-.897-.362-1.413-.756-1.79c-.393-.378-.933-.604-1.869-.725c-.956-.123-2.216-.125-3.99-.125h-3.72c-1.774 0-3.034.002-3.99.125"
                                clipRule="evenodd"></path>
                        </svg>
                    </span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 24 24">
                            <path
                                fill="white"
                                d="M12 17.692q1.975 0 3.275-1.491q1.3-1.491 1.367-3.543l1.058.969l.627-.627l-2.077-2.077L14.173 13l.627.627l.958-.958q-.112 1.671-1.145 2.905q-1.032 1.234-2.613 1.234q-.306 0-.599-.063q-.293-.062-.574-.149l-.677.677q.454.185.916.302q.463.117.934.117m-4.25-2.615L9.827 13l-.627-.627l-.958.958q.112-1.671 1.145-2.905Q10.419 9.192 12 9.192q.306 0 .599.063q.293.062.574.149l.677-.677q-.454-.185-.916-.302q-.463-.117-.934-.117q-1.975 0-3.275 1.491q-1.3 1.491-1.367 3.543L6.3 12.373L5.673 13zM4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385V7.615q0-.69.463-1.152Q3.925 6 4.615 6h2.958l1.85-2h5.154l1.85 2h2.958q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h14.77q.269 0 .442-.173t.173-.442V7.615q0-.269-.173-.442T19.385 7h-3.397l-1.844-2H9.856L8.012 7H4.615q-.269 0-.442.173T4 7.615v10.77q0 .269.173.442t.442.173M12 13"></path>
                        </svg>
                    </span>
                </div>
                {/* Photo Btn */}
                <span className="absolute left-[113px] bottom-11">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 512 512"
                        className="rounded-full bg-stone-700">
                        <path
                            fill="none"
                            stroke="white"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></path>
                    </svg>
                </span>
            </motion.div>
        </div>
    );
};

export default InstaCamera;
