import React,{useState} from 'react';
import './App.css';

function App() {
  return(
      <div className="App">  
      <h1>I - Calculate</h1>    
          
     
     <form>
                <input type="text" id="result" readOnly />   
                <input type="text" id="num" placeholder="enter a number" />
               <button>Add</button>
               <button>Clear</button>
        </form>
     </div>
  )
}

export default App;