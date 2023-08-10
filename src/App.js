import { useState } from 'react';
import './App.css';
import useOnlineStatus from './useOnlinestatus';

const  App =() => {

  const [result, setResult] = useState();

  const handleClick =(e) =>{
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }

const backspace = () =>{
    setResult(result.slice(0,-1));  //
  }

  const calculate =() => {
    try{
      setResult(eval(result).toString());

    }catch(err){
      setResult("Error");
    }
}


  return (
   <>
     <div className='container'>
       <form>
       <li className='status'>{onlineStatus ? "🟢" : "🔴"}</li> 
        <input type="text" value={result} />
       </form>
       <div className='keypad'>
        <button onClick={handleClick}>Clear</button>
        <button onClick={handleClick}>C</button>
        <button onClick={handleClick}>&divide;</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>&times;</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>&ndash;</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleClick}>=</button>

       </div>
     </div>
   </>
  );
}

export default App;
