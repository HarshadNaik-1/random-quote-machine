import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";

// const refreshPage = () => {
//   setTimeout(() => {
//     window.location.reload(false);
//   }, 0);
// };

let randomNum = Math.floor(Math.random() * 1500 + 1);
let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

const url = "https://type.fit/api/quotes";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [randomNumber, setRandomNumber] = useState(randomNum);
  const [randomBodyColor, setRandomBodyColor] = useState(randomColor);

  const refreshPage = () => {
    let randomN = Math.floor(Math.random() * 1500 + 1);
    let randomC = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setRandomNumber((randomNumber) => randomN);
    setRandomBodyColor((randomBodyColor) => randomC);
  };

  useEffect(() => {
    const effect = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setQuote(data[randomNumber].text);
      setAuthor(data[randomNumber].author);
      document.body.style.backgroundColor = randomBodyColor;
    };
    effect();
  }, [randomNumber, randomBodyColor]);

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
        <div className='btnbox'>
          <button
            className='btn'
            style={{
              transition: "ease-in",
              backgroundColor: "rgb(163, 165, 250)",
            }}
            onClick={refreshPage}
          >
            Reload{" "}
          </button>
        </div>
      </h1>
    );
  return (
    <div>
      <h1 style={{ color: randomBodyColor, transition: "ease-in-out" }}>
        <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
      </h1>
      <p
        style={{
          color: randomBodyColor,
          textAlign: "right",
          paddingLeft: "20px",
        }}
      >
        ~ {author}
      </p>
      <div className='btnbox'>
        <button
          className='btn'
          style={{ backgroundColor: randomBodyColor }}
          onClick={refreshPage}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
export default Quote;
