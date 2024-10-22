import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";  // Import the Link component

const BookComponent = ({ result }) => {
  const fetchResult = result.map((book) => {
    return (
      <div className="col-md-4" key={book.id}>
        <div className="theBook ">
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
            <strong>Categories:</strong> {book.volumeInfo.categories?.join(" , ")}
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
          <Link to={`/book/${book.id}`} className="more-details-link">
            More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    );
  });
  return <div className="row">{fetchResult}</div>;
};

export default BookComponent;
