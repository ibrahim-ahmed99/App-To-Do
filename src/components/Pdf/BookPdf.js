import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const BookPdf =({book})=>{
    useEffect(() => {
        Aos.init({
          duration: 1000, // Duration of animations in milliseconds
          once: false, // Whether animation should happen only once
        });
        // Aos.refresh();
      }, []);
return(
    <div className="container">
        <div
            className="col-md-12"
            style={{ display: "flex", alignItems: "center" ,padding:"20px",background:'#f2f2f2',flexDirection:'row-reverse'}}
          >
            <div className="col-md-6" style={{display:'flex',justifyContent:'center'}} data-aos="fade-down">
              <img src="https://play-lh.googleusercontent.com/Ufl3zYT2bmhDbB9_hSGBJkJcvFyJ0G-acacGDJaMPhODb1fMynEGuNlaboTBeXwDGw"></img>
            </div>
            <div className="col-md-6 " style={{textAlign:'center'}} data-aos="fade-up">
            <span>Free to read copy</span>
            <p className="main-p">
                  If you would like to read the book online, simply click the
                  next button to begin. This will take you to an interactive,
                  digital version of the book, allowing you to enjoy the content
                  at your own pace. You can navigate through the chapters
                  seamlessly, bookmark pages, and pick up right where you left
                  off whenever you return. Accessing the book online provides a
                  flexible and convenient way to enjoy the story from any device
                  with internet access
                </p>
              <div className="book-links">
                <a
                  href={book.accessInfo.webReaderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-link"
                >
                 read the book
                </a>
              </div>
            </div>
          </div>
    </div>
)
}
export default BookPdf ;