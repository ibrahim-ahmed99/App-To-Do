import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 



const Button = ({result})=>{
  return<button >
    More Details <FontAwesomeIcon icon={faArrowRight} />
 </button>}
export default Button;