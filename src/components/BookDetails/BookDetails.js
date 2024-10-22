import React, { useEffect, useState } from "react"; // Correct import
import axios from "axios";
import { useParams } from "react-router-dom";
import "./bookDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowLeft, faFilePdf, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const BookDetails = () => { 
  const { id } = useParams();
  const [book, setBook] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize the useNavigate hook
    const handleGoBack = () => {
      navigate('/'); // Replace with the correct route for BookComponent page
    };
  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true); // Set loading to true before making API call
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`,
        );
        setBook(response.data);
        console.log(response.data);
      } catch (error){
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
        <button style={{width:'6% ',background:'darkblue',margin:'10px',borderRadius:'5px',padding:'10px'}} onClick={handleGoBack}> <FontAwesomeIcon icon= {faArrowLeft} 
        style={{fontSize:'20px',color:'white'}} /></button>
        <div className="col-md-12" key={book.id} >
        <div className="bookDetails">
        <div className="title"><strong >Title</strong>{book.volumeInfo.title}</div>
        <div className="book-content">
        <div className="row mx-0" style={{display:'flex',alignItems:'center'}}>
        <div className="col-md-8" style={{display:'flex',justifyContent:'center', flexDirection:'column'}}>
   
        <Link className="link" to={`/author/${book.volumeInfo.authors[0]}`}>
        View details about the author  </Link>
        <div className="book-links">   
          <a
            href={book.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-link"
          >
          BUY THE BOOK  <FontAwesomeIcon icon={faMoneyBill} />
          </a>
           </div>
           <div className="book-links" style={{width:'5%'}}>  
           <a
            href={book.accessInfo.webReaderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-link"
          >
          <FontAwesomeIcon icon={faFilePdf} />
          </a>
          </div>
        <div className="description"> <strong>Description</strong> {book.volumeInfo.description}</div>

        </div>
        <div className="col-md-4" style={{display:'flex',justifyContent:'right',padding:'0'}}>
        <img
            style={{width:'80%',borderRadius:'10px'}}
            src={book.volumeInfo.imageLinks?.thumbnail || "placeholder-image-url"}
            alt="Book Thumbnail"
          />
        </div>
        </div>
      
        
        </div>
       
        </div>
        </div>
        </div>
        
      ) : (
        <p>there is no books  </p>
      )}
    </div>
);};
export default BookDetails;
