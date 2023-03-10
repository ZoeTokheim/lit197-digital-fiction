import Clock from "./Home/Clock";
import TimeBasedText from "./Home/TimeBasedText"
import './App.css';
import React, { useState } from 'react';
import Modal from './Modal/Modal';

/*
Significant amounts of code in this program were generated by 
ChatGPT, by OpenAI.
*/

function App() {
  const [showModal, setShowModal] = useState(true);
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem('entries')) || []
  );
  const [entry, setEntry] = useState(["", -1]);
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem('name')) || ""
  );
  const [tempName, setTempName] = useState(name);


  const handleEntrySubmit = (e) => {
    if (entry[0] && tempName) {
      e.preventDefault();
      setName(tempName);
      localStorage.setItem('name', JSON.stringify(tempName));
      setEntries([...entries, entry]);
      localStorage.setItem('entries', JSON.stringify([...entries, entry]));
      setEntry('');
      setTempName('');
      setShowModal(false);
    }
    else if (entry[0] && name) {
      e.preventDefault();
      setName(name);
      setEntries([...entries, entry]);
      localStorage.setItem('entries', JSON.stringify([...entries, entry]));
      setEntry('');
      setShowModal(false);
    }
  };

  return (
    <div className="App">
      <div>
        <Modal
          entry={entry}
          setEntry={setEntry}
          name={name}
          setName={setName}
          tempName={tempName}
          setTempName={setTempName}
          handleEntrySubmit={handleEntrySubmit}
          showModal={showModal}
        />
        {/* {entries.length > 0 ? (
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>Hello, {entry}!</li>
            ))}
          </ul>
        ) : (
          <h1>Hello, World!</h1>
        )} */}
      </div>

      <header className="App-header">
        <h1>fiction on demand (beta v1.2)</h1>
        <Clock />
        <hr />
        <TimeBasedText
          name={name}
          entries={entries}
        />
      </header>
    </div>
  );
}

export default App;
