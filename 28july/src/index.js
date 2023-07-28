import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
let currDate = new Date();
currDate = currDate.getHours();
let greetings ='';
const cssStyle = {};
if(currDate>=1 && currDate<12){
  greetings = 'Good morning';
  cssStyle.color = 'green';
}
else if(currDate>=12 && currDate<19){
  greetings = 'Good afternoon';
  cssStyle.color = 'yellow';
}
else{
  greetings = 'Good night';
  cssStyle.color = 'blue';
}
ReactDOM.render(
<><div>
<h1>hello sir ,<span style={cssStyle}> {greetings}</span></h1> 
</div></>,
document.getElementById("root")

);