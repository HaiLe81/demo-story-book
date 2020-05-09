import React from "react";
import User  from "../components/User/User";
import TransactionAdmin from "../components/TransactionAdmin/TransactionAdmin";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'Transaction',
  component: TransactionAdmin,
};

export const transactionAdmin = () => <TransactionAdmin></TransactionAdmin>

// export const userCustomer = () => <UserCustomer></UserCustomer>
