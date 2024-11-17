import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookComponent from "../Book/BookComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Author() {
    const {name} = useParams(); 
    const [loading, setLoading] = useState(false); // Loading state
    const[result,setResult]=useState([]);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleGoBack = () => {
      navigate(-1); 
    };
    useEffect(() => {
        const search = async () => {
          try {
            setLoading(true); // Set loading to true before making API call
            const response = await axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=inauthor:${name}`,
            );  
            setResult(response.data.items);
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
        
        <div className="main-book row mx-0">
        <button style={{width:'6% ',background:'darkblue',margin:'10px',borderRadius:'5px',padding:'10px'}} onClick={handleGoBack}> <FontAwesomeIcon icon= {faArrowLeft} 
        style={{fontSize:'20px',color:'white'}} /></button>
           <h1 className="col-12 text-center mb-4" style={{fontSize:'50px',fontWeight:'900',color:' rgb(41, 41, 185)'}}>
           Author name :
           {name ? name : 'Unknown Author'}
      </h1>
      <h2 style={{textAlign:'center',color:'darkcyan',marginBottom:'20px',fontWeight:700,fontSize:'40px'}}>His writings
      <FontAwesomeIcon icon={faHandPointDown} className="icon-hover" /></h2>
        <div >{<BookComponent result={result}/>}</div>
  
        </div>
       )    
  
  }
  