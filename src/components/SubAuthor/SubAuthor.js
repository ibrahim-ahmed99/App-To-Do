import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const SubAuthor = ({ book }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations in milliseconds
      once: false, // Whether animation should happen only once
    });
    // Aos.refresh();
  }, []);
  return (
    <div className="container">
      <div
        className="col-md-12"
        style={{ display: "flex", alignItems: "center", padding: "20px" , background:'rgb(242, 242, 242)'}}
      >
        <div
          className="col-md-6 "
          style={{ textAlign: "center" }}
          data-aos="fade-up"
        >
          <span>Find out more about the author</span>
          <p className="main-p">
            "If you would like to explore more of the author's works, simply
            click the next button to continue. This will take you to a curated
            selection of the author’s other books, articles, and projects,
            providing a deeper dive into their writing and unique style. You'll
            have the opportunity to browse through different genres, read
            synopses, and even sample a few pages. Discovering more of the
            author’s work allows you to fully appreciate their craft and gain
            new insights through additional stories, perspectives, and themes."
          </p>
          <Link className="link" to={`/author/${book.volumeInfo.authors[0]}`}>
            View details about the author{" "}
          </Link>
        </div>
        <div
          className="col-md-6"
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-down"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/5520/5520958.png"></img>
        </div>
      </div>
    </div>
  );
};
export default SubAuthor;
