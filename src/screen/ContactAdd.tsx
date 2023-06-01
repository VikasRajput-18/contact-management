import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  allConatctListDetails,
  singleContactDetails,
  updateContact,
} from "../store/contactSlice";
import { Contact } from "../contact";
import { useLocation, useNavigate } from "react-router-dom";
const ContactAdd = () => {
  const [contactDetails, setContactDetails] = useState<Contact>({
    id: uuidv4(),
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    status: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { contactDetail, isSidebarOpen } = useSelector(
    (state: any) => state.contact
  );

  // set a active inactive status
  const handleCheckStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactDetails((prev) => ({
      ...prev,
      status: e.target.value,
    }));
  };

  // add a contact
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };
  // submit and add a contact into contact List
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state?.contactId) {
      dispatch(updateContact(contactDetails));
    } else {
      dispatch(allConatctListDetails(contactDetails));
    }
    setContactDetails({
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      status: "",
    });
    setTimeout(() => {
      navigate("/");
    }, 400);
  };

  useEffect(() => {
    dispatch(singleContactDetails(state?.contactId));
    if (state?.contactId) {
      setContactDetails({
        id: state?.contactId,
        firstname: contactDetail?.firstname,
        lastname: contactDetail?.lastname,
        email: contactDetail?.email,
        phone_number: contactDetail?.phone_number,
        status: contactDetail?.status,
      });
    }
  }, [dispatch, state?.contactId, contactDetail]);

  return (
    <section
      className="text-white flex justify-center contactList"
      style={{
        marginTop: "5rem",
        marginLeft: isSidebarOpen ? "300px" : 0,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="
      border border-slate-600 rounded-xl
      shadow-2xl shadow-slate-600 contact-form
      pb-8
      "
      >
        <h1 className="text-center text-2xl font-semibold border-b border-slate-600 py-4">
          Add Contact
        </h1>

        <div className="flex px-6 md:items-center md:justify-center flex-col md:flex-row w-full gap-4 mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="firstname"
              value={contactDetails.firstname}
              required
              onChange={handleChange}
              className="bg-transparent border border-slate-500 text-white text-xl font-medium pl-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="lastname"
              value={contactDetails.lastname}
              onChange={handleChange}
              required
              className="bg-transparent border border-slate-500 text-white text-xl font-medium pl-4 py-2"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col px-6 gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactDetails.email}
            onChange={handleChange}
            className="bg-transparent border border-slate-500 text-white text-xl font-medium pl-4 py-2"
            required
          />
        </div>

        <div className="mt-5 flex flex-col px-6 gap-2">
          <label htmlFor="phone_number">Phone No.</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={contactDetails.phone_number}
            onChange={handleChange}
            required
            className="bg-transparent border border-slate-500 text-white text-xl font-medium pl-4 py-2"
          />
        </div>

        <div className="flex items-center  pl-6 gap-4 mt-5">
          <div className="flex  gap-2">
            <input
              type="radio"
              id="active"
              name="status"
              value="active"
              onChange={handleCheckStatus}
              className="bg-transparent border border-slate-500 text-white text-xl font-medium pl-4 py-2"
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="inactive"
              name="status"
              value="inactive"
              onChange={handleCheckStatus}
              className="bg-transparent border border-slate-500 text-white text-xl font-medium pl-4 py-2"
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-bold mt-8 text-center save-contact py-2 px-10 rounded-xl mx-6">
            Save Contact
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactAdd;
