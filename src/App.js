import React,{useState} from 'react';
import './App.css';
const [currentSum,setCurrentSum]=useState(0);
const [clear,setClear]=useState(false);


const Add=(e)=>{
      e.preventDefault();
      if(clear) setClear(false);
      let currentNum=document.querySelector('#num').value
     if(currentNum=='')
      return;
     let sum= currentSum+parseInt(currentNum);
      setCurrentSum(sum);
      document.querySelector('#num').value="";
  
  }

  

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