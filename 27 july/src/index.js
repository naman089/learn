import React from 'react';
import ReactDOM from 'react-dom';
const name = "Naman";

ReactDOM.render(<>
  <h1 contentEditable>hello , my name is {name} </h1>
  <img src = "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png" alt ="randomimages"/>
  
  </>, 
  document.getElementById('root')
);