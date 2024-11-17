import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BookComponent from "./components/Book/BookComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const fetchBooks = async (pageNum = 0) => {

    try {
      setLoading(true);
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes", 
        {
          params: {
            q: term,
            maxResults: 10,
            startIndex: pageNum * 10,
          },
        }
      );
      setResult(prevResult => [...prevResult, ...response.data.items || []]);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setResult([]);
    setPage(0);
    if (term) fetchBooks();
  }, [term]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (page > 0) fetchBooks(page);
  }, [page]);

  return (
    <div className="main-page">
    <div className="row mx-0" style={{background:'#e9e9d4', position:'relative'}}>
    <div className="col-md-6" style={{marginTop:'5%'}}>
        <h1 data-aos="fade-down" data-aos-delay="200">The Best Place To Discover , Read <span className="and">&</span>  Engage With Book</h1>
        <p data-aos="fade-down" data-aos-delay="300" className="paragraph">Reading is more fun and motvating together . Bulid your bookshelf invite your friends , share notes and conversations
        in the margins of the texts you read .</p>
      </div>
      <div className="col-md-6 ">
      <img className="lamp" data-aos="zoom-in" data-aos-delay="200" src="https://png.pngtree.com/png-vector/20220830/ourmid/pngtree-hand-drawn-cute-yellow-light-bulb-idea-png-image_6132185.png"></img>
      <img data-aos="fade-left" data-aos-anchor-placement="center-bottom"  src="https://mindplay.com/wp-content/uploads/2024/05/Header-photos-library-v3-1024x941.png" style={{maxWidth:'75%',margin:'auto'}} ></img>
      <p
          data-aos="flip-down"
          className="text-center text-[18px] main-title"
          style={{ fontFamily: "cursive" }} >
      <img src="https://images.vexels.com/content/145336/preview/open-book-icon-vector-3c78b1.png" style={{maxWidth:'40%',marginLeft:'-10%'}}></img>
          Book  ({result.length})
        </p>

      </div>
      <div >
      <img data-aos="fade-up"  data-aos-delay="200" src="https://www.pinclipart.com/picdir/big/51-518978_hand-drawn-arrow-png-arrow-hand-drawn-png.png" className="arrow"></img>
      </div>
      <div className="" >
            <input
            data-aos="fade-down" data-aos-delay="400"
              type="text"
              placeholder="Find Your Book"
              className="search"
              id="exampleFormControlInput1"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
    </div>
      <div className="row mx-0">
        {loading && result.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="main-book row">{<BookComponent result={result} />}</div>
        )}
      </div>
      {loading && result.length > 0 && (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    
    </div>
    
  );

}


