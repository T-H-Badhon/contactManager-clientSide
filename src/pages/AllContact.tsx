import React from "react";
import { useGetContactsQuery } from "../redux/api/contactApi/contactApi";

const AllContact = () => {
  const { data: contacts } = useGetContactsQuery("");

  console.log(contacts);

  return <div>all contacts</div>;
};

export default AllContact;
