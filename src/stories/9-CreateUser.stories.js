import React from "react";
import CreateUser from "../components/CreateUser/CreateUser";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'CreateUser',
  component: CreateUser,
};

export const createUser = () => <CreateUser></CreateUser>