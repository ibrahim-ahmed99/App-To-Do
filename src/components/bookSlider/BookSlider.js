import React from "react";
import Slider from "react-slick";
import "./bookSlider.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faListCheck, faMarker, faNewspaper, faTableList  } from "@fortawesome/free-solid-svg-icons";


function BookSlider({book}) {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container" style={{ width: '90%', margin: '0 auto' , padding:'50px 0'}}>
      <Slider {...settings}>
        <div className="slider-card">
        <FontAwesomeIcon icon={faMarker}  className="slider-icon"/>
        <h3>First Published</h3>
        <p className="slider-p">First published as an original work at <strong>{book.volumeInfo.publishedDate}</strong> , this book marks the beginning of a unique journey through its author’s vision and storytelling. </p>
        </div>
        <div  className="slider-card">
        <FontAwesomeIcon icon= {faNewspaper } className="slider-icon" />
          <h3>Book pages</h3>
          <p className="slider-p">the book have <strong>{book.volumeInfo.pageCount}</strong> page without list , info and hints Every page of this page is well organized and esay to read</p>
        </div>
        <div className="slider-card">
        <FontAwesomeIcon icon={faListCheck} className="slider-icon" />
          <h3>Categories</h3>
          <p className="slider-p">Books are often categorized into genres that help readers discover stories and topics that match their interests. This book is in the category
          <strong> {book.volumeInfo.categories?.join(" , ")} </strong></p>
        </div>
        <div className="slider-card">
        <FontAwesomeIcon icon={faLanguage} className="slider-icon"/>
          <h3>Language</h3>
          <p className="slider-p">The language of a book is more than just the words on the page; it’s the means by which readers connect with characters, ideas, and emotions.the Language of this book is <strong>{book.volumeInfo.language}</strong> </p>
        </div>
      </Slider>
    </div>
  );
}

export default BookSlider;
