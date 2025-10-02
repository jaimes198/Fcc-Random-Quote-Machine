import {useState} from 'react';
import quotes from "./assets/quotes.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter } from 'react-icons/fa';
import './App.css';
interface Quote{
  quote:string;
  author:string;
}

const getRandomQuote=():Quote=>{
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const[quote,setQuote]=useState<Quote>(getRandomQuote)
const changeQuote=()=>{
setQuote(getRandomQuote())
};
  return (
      <div className="background">
<div id="quote-box">
<div className="quote-content">
<h2 id="text" >
"{quote.quote}"
</h2>
<h4 id="author" className="fw-light fst-italic text-end mt-3 ">
- {quote.author}
</h4>
</div>
<div className="buttons">
<a href="twitter.com/intent/tweet"target="_blank" id="tweet-quote" style={{backgroundColor:"#1da1f2", marginRight:"10px"}}><FaTwitter color="white"/></a>
<button id="new-quote" onClick={changeQuote}>
  Change Quote
</button>
</div>
</div>

      </div>
  )
}

 export default App
