import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Login  from "../components/Login/Login";

export default {
  title: 'Login',
  component: Login,
};
export const login = () => <Login>32131</Login>;
