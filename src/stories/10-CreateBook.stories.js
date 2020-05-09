import React from "react";
import CreateBook from "../components/CreateBook/CreateBook";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: 'CreateBook',
  component: CreateBook,
};

export const createBook = () => <CreateBook></CreateBook>