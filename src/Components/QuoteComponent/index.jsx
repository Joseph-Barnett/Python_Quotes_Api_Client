import React, { useState } from 'react';

export function QuoteComponent ()  {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      let int = Math.floor(Math.random()*9)
      const response = await fetch(`http://127.0.0.1:5000/quotes`);
      const data = await response.json();
      setQuote(data.data[int].text);
      setAuthor(data.data[int].author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};
