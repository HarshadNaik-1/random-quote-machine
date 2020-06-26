import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";

const refreshPage = () => {
  setTimeout(() => {
    window.location.reload(false);
  }, 1000);
};
const url = "https://type.fit/api/quotes";
const randomNum = Math.floor(Math.random() * 1500 + 1);
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    const effect = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setQuote(data[randomNum].text);
      setAuthor(data[randomNum].author);
      document.body.style.backgroundColor = randomColor;
    };
    effect();
  });
  if (!quote || !author)
    return (
      <h1
        style={{
          fontSize: "18px",
          color: "grey",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon icon={faQuoteLeft} />
      </h1>
    );
  return (
    <div>
      <h1 style={{ color: randomColor, transition: "ease-in" }}>{quote}</h1>
      <p
        style={{ color: randomColor, textAlign: "right", paddingLeft: "20px" }}
      >
        ~ {author}
      </p>
      <div className="btnbox">
        <button
          className="btn"
          style={{ backgroundColor: randomColor }}
          onClick={refreshPage}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
export default Quote;
