import React from "react";
import { useSelector } from "react-redux";
import { Contact } from "../contact";
import ContactListItem from "../components/ContactListItem";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { contactList, isSidebarOpen } = useSelector(
    (state: any) => state.contact
  );

  return (
    <section
      className="px-8 flex contactList"
      style={{
        marginTop: "5rem",
        marginLeft: isSidebarOpen ? "300px" : 0,
      }}
    >
      {contactList.length === 0 ? (
        <div>
          <h1 className="text-center text-slate-200 text-3xl font-medium">
            Don't have any Contact?{" "}
            <Link to="/add" className="hover:text-blue-500">
              Click to add{" "}
            </Link>
          </h1>
        </div>
      ) : (
        <table className="border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border border-slate-500 text-white py-2 px-3 md:py-4 text-base font-medium">
                S.No
              </th>
              <th className="border border-slate-500 text-white py-2 px-3 md:py-4 text-base font-medium">
                Name
              </th>
              <th className="border border-slate-500 text-white py-2 px-3 md:py-4 text-base font-medium">
                Phone Number
              </th>
              <th className="border border-slate-500 text-white py-2 px-3 md:py-4 text-base font-medium">
                Edit
              </th>
              <th className="border border-slate-500 text-white py-2 px-3 md:py-4 text-base font-medium">
                Delete
              </th>
              <th className="border border-slate-500 text-white py-2 px-3 md:py-4 text-base font-medium">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {contactList?.map((contact: Contact, index: number) => {
              return (
                <ContactListItem
                  index={index}
                  key={contact.id}
                  contactInfo={contact}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default ContactList;
