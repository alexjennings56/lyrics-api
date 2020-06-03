import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
            <label for='artist'>Artist Name:</label><br/>
            <input type='text' id='artist'></input>
            <input type='submit' value='submit'></input>
        </form>
    </div>
  );
}

export default App;
