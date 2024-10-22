// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// <head>
// <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
// </head>




// ReactDOM.render(
//   <div>
//     <App/>
//   </div>,
// document.getElementById("root")  
// );

import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
 import Navigate from './components/navigation/navigation';
ReactDOM.render(
  <React.StrictMode>
    <Navigate />
  </React.StrictMode>,
  document.getElementById('root')
);
