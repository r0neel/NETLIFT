import axios from "axios";
import React from "react";
import { useState } from "react";

const getQuote = async () => {
  const options = {
    method: "GET",
    url: "https://bodybuilding-quotes1.p.rapidapi.com/random-quote",
    headers: {
      "X-RapidAPI-Host": "bodybuilding-quotes1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.QUOTE_KEY
    }
  };
  try {
    const { data } = await axios.request(options);
    const quote = data.quote;
    console.log(quote);
    return quote;
  } catch (err) {
    console.log(err);
  }
};

const Quote = () => {
  return (
    <>
      <div>
        <h2>{getQuote()}</h2>
      </div>
    </>
  );
};

export default Quote;
