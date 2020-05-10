import React from "react";
import Header  from "../components/Header/Header";
import HeaderCustomer from "../components/HeaderCustomer/HeaderCustomer"

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
