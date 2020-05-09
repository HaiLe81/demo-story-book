import React from "react";
import Profile from "../components/Profile/Profile";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'Profile',
  component: Profile,
};

export const profile = () => <Profile></Profile>