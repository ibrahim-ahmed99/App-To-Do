import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";
import BookDetails from "../BookDetails/BookDetails";
import Author from "../Author/Author";
import LikeContext from "../LikeContext/LikeContext";
const Navigate  = () => {
  const [isLike, SetIsLike]=useState(false);
  return (
    <LikeContext.Provider value={{isLike, SetIsLike}}>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/author/:name" element={<Author />} />
      </Routes>
    </Router>
    </LikeContext.Provider>
   
  );
};
export default Navigate;


