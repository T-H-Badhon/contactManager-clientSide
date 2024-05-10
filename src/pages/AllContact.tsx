import React from "react";
import { useGetContactsQuery } from "../redux/api/contactApi/contactApi";
import { TContact } from "../types/dataTypes";
import ContactCard from "../components/ContactCard";

const AllContact = () => {
  const { data: contacts } = useGetContactsQuery("");

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto">
      {contacts?.data ? (
        contacts.data.map((contact: TContact) => (
          <ContactCard contact={contact} key={contact._id}></ContactCard>
        ))
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};

export default AllContact;
