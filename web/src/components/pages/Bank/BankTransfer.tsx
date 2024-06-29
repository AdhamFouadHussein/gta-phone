import BankFooter from "./components/BankFooter";
import card from "../../assets/images/Bank/card.png";
import transferActive from "../../assets/images/Bank/transferActive.png";
import add from "../../assets/images/Bank/addpayee.png";
import { motion } from "framer-motion";
import TransferData from "./components/TransferData";
import { useEffect, useState } from "react";
import AddNewAccount from "./AddNewAccount";
import Contacts from "../CallApp/contacts/Contacts";
import HomeBar from "../../components/ui/HomeBar/HomeBar";
import { ContactType } from "../../../config/inventory";
import Header from "../../components/ui/Header/Header";

// const dataTransfer = [
//   {
//     name: "Evelyn Smith",
//     letters: "Es",
//     code: "AW BANK UNI 234-46589-000",
//   },
//   {
//     name: "Charlie William",
//     letters: "CW",
//     code: "AW BANK UNI 234-46589-000",
//   },
//   {
//     name: "John Wick",
//     letters: "JW",
//     code: "AW BANK UNI 234-46589-000",
//   },
// ];

const BankTransfer = () => {
  const [open, setOpen] = useState(false);
  const [secOpen, setSecOpen] = useState(false);
  const [overlay, setoverLay] = useState(false);
  const [amount, setAmount] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [contactTrans, setContactTrans] = useState<ContactType[]>([]);

  console.log("contactTrans", contactTrans);

  useEffect(() => {
    const retrievedContactsJSON = localStorage.getItem("contacts");
    if (retrievedContactsJSON) {
      console.log(retrievedContactsJSON, "this");
      const retrievedContacts = JSON.parse(retrievedContactsJSON);
      setContactTrans(retrievedContacts);
      console.log(retrievedContacts.length, "this");
      console.log(retrievedContacts, "this");
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setoverLay(true);
  };

  const handleSecOpen = () => {
    setOpen(false);
    setSecOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSecOpen(false);
    setoverLay(false);
  };

  const handleClick = () => {
    console.log("yes");
    setoverLay(true);
    setAmount(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} 
      
      className=" relative z-0 rounded-[35px] w-full h-full"
    >
      {/* start header */}
      <div className="flex flex-col px-2 justify-between items-center gap-y-2 pt-12 pb-2">
        <div className="w-full flex justify-between items-center px-2">
          <div className="text-white mr-4"></div>
          <span className="text-base font-bold">Transfer</span>
          <button className="text-white" onClick={handleOpen}>
            <img src={add} alt="" width={17} />
          </button>
        </div>
      </div>
      {/* end header */}

      {/* start body */}
      <div className="h-[75%] pt-2 px-1 w-full overflow-y-scroll noScroll">
        {/* {dataTransfer.map((t, index) => (
          <TransferData
            key={index}
            name={t.name}
            code={t.code}
            onClick={() => handleClick()}
          />
        ))} */}

        {contactTrans.map((s, index) => (
          <TransferData
            key={index}
            name={s?.name}
            code={s?.mobile}
            onClick={() => handleClick()}
          />
        ))}
      </div>
      {/* end body */}

      {/* start add section */}
      <div>
        <AddNewAccount
          open={open}
          secOpen={secOpen}
          overlay={overlay}
          handleSecOpen={handleSecOpen}
          handleClose={handleClose}
          setOpen={setOpen}
          setoverLay={setoverLay}
          setContacts={setContacts}
          setAmount={setAmount}
          amount={amount}
        />
      </div>
      {/* end add section */}

      <div className="absolute z-30 w-full bottom-0">
        {contacts && (
          <div className="">
            <Header />
            <Contacts
              setContacts={setContacts}
              contactTrans={contactTrans}
              setContactTrans={setContactTrans}
            />
            <HomeBar bottom="20px" />
          </div>
        )}
      </div>

      {/* start footer */}
      <BankFooter img1={card} img2={transferActive} />
      {/* end footer */}
    </motion.div>
  );
};

export default BankTransfer;
