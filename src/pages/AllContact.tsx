import React from "react";
import { useGetContactsQuery } from "../redux/api/contactApi/contactApi";
import { TContact } from "../types/dataTypes";
import ContactCard from "../components/ContactCard";
import NotFound from "../components/NotFound";

const AllContact = () => {
  const { data: contacts } = useGetContactsQuery("");

  return (
    <div className="container mx-auto lg:px-28">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 mx-auto">
        {contacts?.data ? (
          contacts.data.map((contact: TContact) => (
            <ContactCard contact={contact} key={contact._id}></ContactCard>
          ))
        ) : (
          <div className="lg:col-span-4 md:col-span-3 col-span-1">
            <NotFound></NotFound>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllContact;
