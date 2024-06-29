import PropTypes from "prop-types";
import contact from "../../../assets/images/contact.png";
import plus from "../../../assets/images/plus.png";
import minus from "../../../assets/images/minus.png";
import { useState } from "react";
import { ContactType } from "../../../../config/inventory";

type Props = {
  setShowAddContact: (value: boolean) => void;
};

function AddContact({ setShowAddContact }: Props) {
  const [addPhone, setAddPhone] = useState<ContactType[]>([]);

  const handleAddPhone = () => {
    setAddPhone([
      ...addPhone,
      { id: addPhone.length + 1, name: "", mobile: "", home: "" },
    ]);
  };
  const handleMinusPhone = (id: number) => {
    setAddPhone(addPhone.filter((item) => item.id !== id));
  };
  return (
    <div className="pt-[20px] rounded-[30px] h-[94%] bg-black flex flex-col justify-start items-center gap-5">
      {/* start header */}
      <div className="w-full flex justify-between items-center gap-3 px-1 text-sm">
        <button
          className="text-[#026ee1] active:opacity-80 transition-all duration-100 ease-in-out"
          onClick={() => setShowAddContact(false)}
        >
          Cancel
        </button>
        <h3>New Contact</h3>
        <button
          className="text-[#026ee1] font-bold active:opacity-80 transition-all duration-100 ease-in-out"
          onClick={() => setShowAddContact(false)}
        >
          Done
        </button>
      </div>
      {/* end header */}
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={contact} alt="contact image" className="w-[120px]" />
        <button className="text-[#026ee1] text-sm">Edit</button>
      </div>
      <div>
        <input
          type="text"
          className="bg-[#2c2c2e] placeholder:text-xs w-full h-[35px] border-none outline-none p-3 text-white"
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-[#2c2c2e] placeholder:text-xs w-full h-[35px] border-none outline-none px-3 text-white"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="bg-[#2c2c2e] placeholder:text-xs w-full h-[35px] border-none outline-none px-3 text-white"
          placeholder="Company"
        />
      </div>
      <div className="w-full bg-[#2c2c2e] py-1 px-2 h-fit flex flex-col justify-start items-center gap-2">
        {addPhone.map((item) => (
          <div
            key={item.id}
            className="w-full flex justify-start items-center gap-1 h-fit"
          >
            <button onClick={() => handleMinusPhone(item.id)}>
              <img src={minus} alt="minus" className="w-[60px]" />
            </button>
            <h3 className="text-[#007aff] text-sm flex gap-2">
              mobile <span className="text-white">{">"}</span>{" "}
            </h3>
            <i className="fa-solid fa-chevron-right ml-0.5 text-[10px] text-[#a7a7a7]"></i>
            <input
              type="number"
              className="bg-transparent w-full h-[40px] ml-2 placeholder:text-sm outline-none px-3 text-white"
              placeholder="Phone"
            />
          </div>
        ))}
        <div
          className="w-full h-fit flex justify-start items-center gap-1"
          onClick={handleAddPhone}
        >
          <button>
            <img src={plus} alt="add" />
          </button>
          <h3 className=" text-sm">add phone</h3>
        </div>
      </div>
    </div>
  );
}

AddContact.propTypes = {
  setShowAddContact: PropTypes.func.isRequired,
};

export default AddContact;
