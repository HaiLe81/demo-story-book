import React from "react";
import User  from "../components/User/User";
import Cart from "../components/Cart/Cart";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'Cart',
  component: Cart,
};

export const cart = () => <Cart></Cart>

// export const userCustomer = () => <UserCustomer></UserCustomer>
