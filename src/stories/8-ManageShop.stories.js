import React from "react";
import ManageShop from "../components/ManageShop/ManageShop";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'ManageShop',
  component: ManageShop,
};

export const manageShop = () => <ManageShop></ManageShop>