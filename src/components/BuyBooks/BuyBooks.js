import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const BuyBooks = ({ book }) => {
  return (
    <div className="col-md-12" style={{ display: "flex", alignItems: "center", padding: "20px" }}>
    <div className="col-md-6" data-aos="fade-down">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/035/773/346/small_2x/bookstore-shop-exterior-books-shop-brick-building-png.png"></img>
    </div>
    <div className="col-md-6" data-aos="fade-up" style={{ textAlign: "center" }}>
    <span>Are you ready to buy?</span>
    <p className="main-p">
          "If you're considering buying the book, it might be just what you're
          looking for to dive deeper into this topic. With rich insights,
          engaging writing, and practical takeaways, the book promises a
          rewarding experience for readers at any level of familiarity. Whether
          you're new to the subject or looking to expand your knowledge, this
          book is structured to provide clear guidance and fresh perspectives.
          The author’s unique approach makes complex ideas accessible and
          relatable, making it a worthy addition to your collection. Take the
          plunge and see how it could spark new ideas and enrich your
          understanding!"
        </p>
    <div className="book-links">
    
        <a
          href={book.volumeInfo.infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-link"
        >
          BUY THE BOOK <FontAwesomeIcon icon={faMoneyBill} />
        </a>
      </div>
    </div>  
    </div>
  );
};
export default BuyBooks;
