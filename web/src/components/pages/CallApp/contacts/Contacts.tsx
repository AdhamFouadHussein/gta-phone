import searchIcon from "../../../assets/images/search.png";
import mic from "../../../assets/images/mic.png";
import ContactProfile from "./ContactProfile";
import { useState } from "react";
import AddContact from "./AddContact";
import "./contacts.css";
import { motion } from "framer-motion";
import { ContactType } from "../../../../config/inventory";
import { useLocation } from "react-router-dom";
// import ActionBtn from "../../Bank/components/ActionBtn";

const contacts: ContactType[] = [
  {
    id: 1,
    name: "Amr Mohamed",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 2,
    name: "Mohamed Ahmed ",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 3,
    name: "Belal Ahmed",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 4,
    name: "Ahmed Islam",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 5,
    name: "Eman Basem",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 6,
    name: "Basel Sayed",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 7,
    name: "Selem Bobo",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 8,
    name: "Marwa",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 9,
    name: "Maged",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 10,
    name: "Magdy",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 11,
    name: "Mazen",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 12,
    name: "Nour",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 13,
    name: "Nady",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 14,
    name: "Nadia",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 15,
    name: "Tarek",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 16,
    name: "Serag",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 17,
    name: "Messi",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 18,
    name: "Ronaldo",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 19,
    name: "Zidan",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 20,
    name: "Zaha",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 21,
    name: "Saka",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 22,
    name: "Esraa",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 23,
    name: "yara",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
  {
    id: 24,
    name: "Esam",
    mobile: "(319) 555-0115",
    home: "(319) 555-0115",
  },
];

const enLetters: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type Props = {
  setContactTrans: (value: ContactType[]) => void;
  contactTrans: ContactType[];
  setContacts: (value: boolean) => void;
};

const Contacts = ({ setContacts, setContactTrans }: Props) => {
  const [contact, setContact] = useState<ContactType>();
  const [showContact, setShowContact] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  // const [addShow, setAddShow] = useState(false);

  const pathName = useLocation();

  const handleSelectContact = (id: number) => {
    const contact = contacts.find((contact) => contact.id === id);
    setContact(contact);

    if (pathName.pathname === "/bankTransfer" && contact) {
      const newContact: ContactType = {
        id: contact?.id,
        name: contact?.name,
        home: contact?.home,
        mobile: contact?.mobile,
      };

      const retrievedContactsJSON = localStorage.getItem("contacts");

      if (retrievedContactsJSON) {
        console.log(retrievedContactsJSON, "this");
        const retrievedContacts = JSON.parse(retrievedContactsJSON);

        const contactExists = retrievedContacts.find(
          (i: ContactType) => i.id === newContact.id
        );

        if (!contactExists) {
          localStorage.setItem(
            "contacts",
            JSON.stringify([...retrievedContacts, newContact])
          );
        }
      } else {
        localStorage.setItem("contacts", JSON.stringify([newContact]));
      }

      const ggString: string | null = localStorage.getItem("contacts");
      const gg: string = ggString ? ggString : ""; // Fallback to empty string if ggString is null
      const localStorageItemsData = JSON.parse(gg);

      setContactTrans(localStorageItemsData);
      setContacts(false);
    } else {
      setShowContact(!showContact);
    }
  };

  const GeneratedNames = () => {
    const letters = new Set();

    for (const contact of contacts) {
      letters.add(contact.name.toUpperCase().slice(0, 1));
    }

    const arr: string[] = [];
    for (const char of letters.values()) {
      arr.push(char as string);
    }
    {
      /* sorted letters  */
    }
    const sortedArr = arr.sort();

    const result = [];

    {
      /* loop and sorted letter and push it to result array then loop on contacts array and show it */
    }
    for (let i = 0; i < sortedArr.length; i++) {
      const letter: string = sortedArr[i];
      result.push(
        <div key={i + "d"}>
          <div style={{ backgroundColor: "#2C2C2E" }} className="w-full px-2">
            {letter}
          </div>
          {contacts.map((contact) => {
            if (contact.name.toLowerCase().startsWith(letter.toLowerCase())) {
              return (
                <p
                  key={contact.id}
                  style={{ borderColor: "#2C2C2E" }}
                  className="border border-b-1 border-t-0 border-r-0 border-l-0 py-1 ml-2"
                  onClick={() => handleSelectContact(contact.id)}
                >
                  {contact.name}
                </p>
              );
            } else {
              return null; // Render nothing if the contact doesn't match the letter
            }
          })}
        </div>
      );
    }

    return (
      <div className="allnum w-full overflow-y-auto noScroll">{result}</div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="absolute left-0 right-0 -bottom-1 bg-black text-white flex flex-col justify-start items-start h-[88vh] pt-[55px] rounded-[40px]"
    >
      {/* <div
        style={{ display: addShow ? "block" : "none" }}
        className={`absolute top-4 left-0 h-[98%] ${
          addShow ? "z-30 block" : "z-0 hidden"
        } bg-black/40 w-full rounded-[35px]`}
      >
        <div className="pb-16 w-[90%] absolute bottom-0">
          <ActionBtn
            color={"text-blue-500"}
            title={`Add ${contact?.name}`}
            // onClick={() => setAddShow(false)}
            height={"h-[10%]"}
          />
        </div>
      </div> */}

      <div
        className={`w-full transition-all ease-in-out duration-100 ${
          showContact || showAddContact ? "blur-[3px]" : "blur-0"
        }`}
      >
        <div className="flex justify-between items-center px-2">
          <button className="text-sm text-blue-500">Groups</button>
          {/* Add Contact Page */}
          <button
            className="text-sm text-blue-500"
            onClick={() => setShowAddContact(!showAddContact)}
          >
            Add
          </button>
        </div>
        <div className="mt-3">
          {/* <!--Search button--> */}
          <div className="mb-3 ">
            <div className="relative flex justify-between items-center mb-4 px-2 w-full flex-wrap">
              <div color="light " className="flex justify-center items-center ">
                <button className="py-3" type="button" id="button-addon1">
                  <img src={searchIcon} alt="" className="w-full " />
                </button>
                <input
                  type="search"
                  className=" rounded-l bg-transparent pl-1 text-base font-normal outline-none dark:placeholder:text-neutral-700 "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
              </div>
              <div>
                <img src={mic} alt="" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* generated names */}
      <GeneratedNames />
      <div className="absolute right-0 top-[20%] text-[10px] text-blue-500">
        {enLetters.map((letter, index) => {
          return (
            <span className="block" key={index + "z"}>
              {letter}
            </span>
          );
        })}
      </div>
      {/* show contact profile */}
      <div
        className={`Contact absolute w-full h-full ${
          showContact ? "openContact" : "closeContact"
        } z-50`}
      >
        {showContact && contact && (
          <ContactProfile contact={contact} setShowContact={setShowContact} />
        )}
      </div>
      {/* Add new contact page */}
      <div
        className={`Contact absolute w-full h-full ${
          showAddContact ? "openContact" : "closeContact"
        } z-50`}
      >
        {showAddContact && <AddContact setShowAddContact={setShowAddContact} />}
      </div>
    </motion.div>
  );
};

export default Contacts;
