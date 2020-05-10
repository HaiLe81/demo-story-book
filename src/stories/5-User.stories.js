import React from "react";
import User  from "../components/User/User";
import UserCustomer from "../components/UserCustomer/UserCustomer";

export default {
  title: 'User',
  component: User,
};

export const user = () => <User></User>

export const userCustomer = () => <UserCustomer></UserCustomer>
