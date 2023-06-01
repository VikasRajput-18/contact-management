import React from "react";
import { Contact } from "../contact";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteContact } from "../store/contactSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type ContactListItemProps = {
  index: number;
  contactInfo: Contact;
};

const ContactListItem = ({ index, contactInfo }: ContactListItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // delete a contact
  const handleDelete = (contactId: string | any) => {
    dispatch(deleteContact(contactId));
  };

  // edit a contact by selecting contact id
  const handleEdit = (contactId: string | any) => {
    navigate("/add", { state: { contactId } });
  };

  return (
    <tr className="hover:bg-purple-800">
      <td className="border border-slate-500 text-center text-base py-2 px-3 md:py-4  md:px-6 text-white font-thin">
        {index + 1}
      </td>
      <td className="border border-slate-500 text-center text-base py-2 px-3 md:py-4 text-white font-thin">
        {contactInfo.firstname + " " + contactInfo.lastname}
      </td>
      <td className="border border-slate-500 text-center text-base py-2 px-3 md:py-4 text-white font-thin">
        {contactInfo.phone_number}
      </td>
      <td className="border border-slate-500  cursor-pointer text-base py-2 px-3 md:py-4 text-white font-thin">
        <p
          onClick={() => handleEdit(contactInfo.id)}
          className="text-center flex justify-center hover:text-green-600 hover:text-2xl transition-all duration-200 ease-in-out"
        >
          <AiFillEdit />
        </p>
      </td>
      <td className="border border-slate-500  cursor-pointer text-base py-2 px-3 md:py-4 text-white font-thin">
        <p
          onClick={() => handleDelete(contactInfo.id)}
          className="text-center flex justify-center hover:text-red-600 hover:text-2xl transition-all duration-200 ease-in-out"
        >
          <AiFillDelete />
        </p>
      </td>
      <td
        onClick={() => navigate(`/details/${contactInfo.id}`)}
        className="border border-slate-500 text-center text-base py-4  px-6 text-white hover:text-blue-500  cursor-pointer font-thin"
      >
        More...
      </td>
    </tr>
  );
};

export default ContactListItem;
