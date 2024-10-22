import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BookComponent from "./components/Book/BookComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";


export default function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true); // Set loading to true before making API call
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes", 
           {
            params: {
              q: term,
              maxResults: 15,
            },
          }
        );
        setResult(response.data.items);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    if (term) {
      search();
    } else {
      setResult([]);
    }
  }, [term]); // Adding 'term' as dependency

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search Input
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <p
          className="text-center text-[18px] main-title"
          style={{ fontFamily: "cursive" }} >
          <FontAwesomeIcon icon={faBook} />
          Book ({result.length})
        </p>

        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="main-book row">{<BookComponent result={result}/>}</div>
        )}
      </div>
    </div>
  );
}
