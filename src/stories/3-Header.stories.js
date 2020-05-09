import React from "react";
import Header  from "../components/Header/Header";
import HeaderCustomer from "../components/HeaderCustomer/HeaderCustomer"
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'Header',
  component: Header,
};

export const header = () => <Header user={{ 
    id: "GlwUE1GIm",
    name: "Hai Le",
    email: "lekhachai9999@gmail.com",
    isAdmin: true
 }} existShop="true"></Header>;

 export const headerCustomer = () => <HeaderCustomer></HeaderCustomer>
