import React, { useEffect, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const BookComponent = ({ result }) => {
  // State to store individual like statuses for each book
  const [likedBooks, setLikedBooks] = useState({});

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  // Function to toggle like status of a book
  const toggleLike = (bookId) => {
    setLikedBooks((prevLikedBooks) => ({
      ...prevLikedBooks,
      [bookId]: !prevLikedBooks[bookId],
    }));
  };
  const fetchResult = result.map((book) => {
    const isLiked = likedBooks[book.id] || false; // Get the like status for this book

    return (
      <div className="col-md-4" style={{ position: "relative" }} key={book.id}>
        <button
          style={{
            position: "absolute",
            right: "13px",
            background: "#888",
            padding: "13px",
          }}
          onClick={() => toggleLike(book.id)}
        >
          <FontAwesomeIcon
            fontSize="25px"
            color={isLiked ? "red" : "white"}
            icon={faHeart}
          />
        </button>
        <div className="theBook">
          <div className="head-title">
            <strong>Title:</strong> <h2>{book.volumeInfo.title}</h2>
          </div>
          <img
            className="book-img"
            src={book.volumeInfo.imageLinks?.thumbnail || "placeholder-image-url"}
            alt="Book Thumbnail"
          />
          <div className="main-content">
            <strong>Author(s):</strong> {book.volumeInfo.authors?.join(", ")}
          </div>
          <div className="main-content">
            <strong>First Published:</strong> {book.volumeInfo.publishedDate}
          </div>
          <div className="main-content">
            <strong>Book pages:</strong> {book.volumeInfo.pageCount}
          </div>
          <div className="main-content">
            <strong>Categories:</strong> {book.volumeInfo.categories?.join(", ")}
          </div>
          <div className="main-content">
            <strong>Language:</strong> {book.volumeInfo.language}
          </div>
          <table>
            <strong>Statistics:</strong>
            <tbody>
              <tr>
                <th>Rating Average</th>
                <td>{book.volumeInfo.averageRating}</td>
              </tr>
              <tr>
                <td>Rating Count</td>
                <td>{book.volumeInfo.ratingsCount}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={`/book/${book.id}`}
            className="more-details-link"
            data-aos="flip-left"
          >
            More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    );
  });

  return <div className="row">{fetchResult}</div>;
};

export default BookComponent;
