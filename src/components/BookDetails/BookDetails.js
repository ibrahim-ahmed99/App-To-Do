import React, { useEffect, useState } from "react"; // Correct import
import axios from "axios";
import { useParams } from "react-router-dom";
import "./bookDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFilePdf,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BookPdf from "../Pdf/BookPdf";
import SubAuthor from "../SubAuthor/SubAuthor";
import Aos from "aos";
import BuyBooks from "../BuyBooks/BuyBooks";
import AuthorDescription from "../AuthorDescription/AuthorDescription";
import BookSlider from "../bookSlider/BookSlider";
import AdvantageBook from "../Advantage/AdvantageBooks";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleGoBack = () => {
    navigate("/"); // Replace with the correct route for BookComponent page
  };
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations in milliseconds
      once: false, // Whether animation should happen only once
    });
    // Aos.refresh();
  }, []);
  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true); // Set loading to true before making API call
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    search();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : book !== false ? (
        <div className="container">
          <button
            style={{
              width: "6% ",
              background: "darkblue",
              margin: "10px",
              borderRadius: "5px",
              padding: "10px",
            }}
            onClick={handleGoBack}
          >
            {" "}
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: "20px", color: "white" }}
            />
          </button>
          <div className="title">
                <strong>Title</strong>
                {book.volumeInfo.title}
              </div>
              
          <AuthorDescription book={book}/>
          <BookSlider book={book} />
          <SubAuthor book={book}/>
          <BuyBooks book={book}/>
          <BookPdf book={book} />
          <AdvantageBook/>
        </div>
      ) : (
        <p>there is no books </p>
      )}
    </div>
  );
};
export default BookDetails;
