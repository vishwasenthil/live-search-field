import {useState} from "react";
import './App.css';
import React from 'react';

function App() {
  let [results, setResults] = useState(0);
  let words = [`hi`, `bye`, `shirt`, `laptop`, `apple`, `hola`, `banana`];

  function checkResults(e) {
    let count = 0;
    if(e.target.value.length == 0) {
      count = 0;
    }
    for(let i = 0; i < words.length; i++) {
      if(e.target.value === words[i].substring(0, e.target.value.length)) {
        count++;
      }
    }
    setResults(count);
  }

  return (
    <div className="App">
      <form>
        <input type="text" onChange={checkResults}/>
        <button>search</button>
        <p>num results: {results}</p>
      </form>
    </div>
  );
}

export default App;
