import { useState } from 'react';
import './App.css';
function Room() {
    const [isLit,setLit] = useState(false);
    let [age, setage] = useState(24);
    function updateLit(){
        console.log("button clicked");
        setLit(!isLit);
      }
    // const updateAge =() => {
    //     console.log("button clicked");
    //     setage(age++);
    //   }

  return (
    <div>
     This Room is: Lit = {isLit ? "lit" : "dark"}  
     <br/>
     Age :{age}
     <br/>
     <button onClick={updateLit}>Toggle Light</button>
     <br/>
     <button onClick={()=> {
         console.log("Increase age on arrow function");
         setage(++age);
     }}>Set Age</button>
    </div>
  );
}

export default Room;
