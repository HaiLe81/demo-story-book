import React from "react";
import Book  from "../components/Book/Book";
import BookForAdmin from "../components/BookForAdmin/BookForAdmin";

export default {
  title: 'Book',
  component: Book,
};

export const book = () => <Book></Book>

export const bookAdmin = () => <BookForAdmin></BookForAdmin>
