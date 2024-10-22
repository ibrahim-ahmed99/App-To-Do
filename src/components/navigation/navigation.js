import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";
import BookDetails from "../BookDetails/BookDetails";
import Author from "../Author/Author";
const Navigate  = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/author/:name" element={<Author />} />

      </Routes>
    </Router>
  );
};
export default Navigate;