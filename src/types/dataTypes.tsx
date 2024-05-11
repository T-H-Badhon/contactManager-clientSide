export type TContact = {
  _id: string;
  name: string;
  email?: string;
  phoneNumber: string;
  address: string;
  ProfilePhoto: string;
  isFavourite: boolean;
};

export type TError = {
  statusCode: number;
  data: {
    message: string;
    errorMessage: string;
  };
};
