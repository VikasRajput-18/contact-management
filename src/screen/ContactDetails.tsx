import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleContactDetails } from "../store/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactDetails = () => {
  const { id } = useParams<{ id?: string | any }>();
  const dispatch = useDispatch();
  const { contactDetail } = useSelector((state: any) => state.contact);

  useEffect(() => {
    dispatch(singleContactDetails(id));
  }, [dispatch, id]);

  return (
    <section
      className="px-8 flex justify-center"
      style={{
        marginTop: "5rem",
        marginLeft: "300px",
      }}
    >
      <div className="px-8 py-3 rounded border border-slate-500 w-full max-w-2xl shadow-2xl">
        <h1 className="text-center text-white text-2xl py-5 border-b border-slate-500 mb-5">
          Contact Details
        </h1>
        <div className="grid grid-flow-col grid-cols-2 mb-4">
          <p className=" text-white ">Name</p>
          <p className=" text-white">
            {contactDetail?.firstname + " " + contactDetail?.lastname}
          </p>
        </div>
        <div className="grid grid-flow-col grid-cols-2 mb-4">
          <p className=" text-white ">Email</p>
          <p className=" text-white">{contactDetail?.email}</p>
        </div>
        <div className="grid grid-flow-col grid-cols-2 mb-4">
          <p className=" text-white ">Phone Number</p>
          <p className=" text-white">{contactDetail?.phone_number}</p>
        </div>
        {contactDetail?.status && (
          <div className="grid grid-flow-col grid-cols-2 mb-4">
            <p className=" text-white ">Status</p>
            <p className=" text-white">{contactDetail?.status}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactDetails;
