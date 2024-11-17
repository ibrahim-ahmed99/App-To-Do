import React from "react";
const AuthorDescription = ({book})=>{
    return(
        
        <div className="col-md-12" key={book.id}  style={{ display: "flex", alignItems: "center", padding: "100px 0",background:'rgb(242, 242, 242)' }}>
        <div className="col-md-6">
            <div className="main-img" data-aos="flip-right"  
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "0",
                  }}
                >
                  <img
                  
                    style={{ width: "33%", borderRadius: "10px",boxShadow: " 0px 25px 80px rgba(0, 0, 0, 0.5)",transform:'rotate3d(1, 1, 1, 10deg)',transition:'0.3s'}}
                src={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      "placeholder-image-url"
                    }
                    alt="Book Thumbnail"
                  />
                </div>
            
            </div>
        <div className="col-md-6 text-center" data-aos="fade-left">
        <div className="description">
                    {" "}
                    <span>Description</span> <p className="main-p">{book.volumeInfo.description}</p> 
                  </div>   
        </div>
                       
        </div>
    )
}
export default AuthorDescription;