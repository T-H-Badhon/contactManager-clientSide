import React from "react";
import { TContact } from "../types/dataTypes";
import { Card, Dropdown } from "flowbite-react";

const ContactCard = ({ contact }: { contact: TContact }) => {
  console.log(contact);
  return (
    <Card className="max-w-sm mx-auto">
      <div className="flex justify-between px-4 pt-4">
        <div>hi</div>
        <Dropdown inline label="" className=" rounded-lg">
          <Dropdown.Item className="w-full rounded-lg">
            <button>Update</button>
          </Dropdown.Item>
          <Dropdown.Item className="w-full rounded-lg">
            <button>mark as favourite</button>
          </Dropdown.Item>
          <Dropdown.Item className="w-full rounded-lg">
            <button>Delete</button>
          </Dropdown.Item>
        </Dropdown>
      </div>

      <div className="flex flex-col items-center pb-5">
        <img
          height="96"
          src={contact.ProfilePhoto}
          width="96"
          className="mb-3 rounded-2xl shadow-lg"
        />
        <div className="px-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">Name</div>
            <div className="col-span-3">: {contact.name}</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1">Phone</div>
            <div className="col-span-3">: {contact.phoneNumber}</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1">Email</div>
            <div className="col-span-3">: {contact?.email || "not added"}</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1">Address</div>
            <div className="col-span-3">: {contact.address}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
