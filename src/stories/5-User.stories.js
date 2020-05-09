import React from "react";
import User  from "../components/User/User";
import UserCustomer from "../components/UserCustomer/UserCustomer";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'User',
  component: User,
};

export const user = () => <User></User>

export const userCustomer = () => <UserCustomer></UserCustomer>
