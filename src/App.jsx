import './App.css'
import { useState } from 'react';


function App() {
  //Create Array that has a length of 9

  const defaultBoard = () => (new Array(9)).fill(null);

  const [boardData, setBoardData] = useState(defaultBoard);
  const [player, setPlayer] = useState('X');
  const [cpu, setCput] = useState('O')

  

  function Square (props) {
    return (
      <div className='square'>
          <h1>{props.value}</h1>
      </div>
    );
  }
  function Board () {
    return (
      <div className='board'>
         {boardData.map((value, index) => {
        
            return (
              <>
                
                <Square key={index} value={value}>
                  
                </Square>
              </>
            );
            

         })}
      </div>
    );
  }


  return (
    <div className='App'>
      <Board/>
    </div>
  );

  
}

export default App
