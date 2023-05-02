import './App.css'
import History from './components/History';
import ResetButton from './components/ResetButton';
import historyData from './data/historyData';
import { useState, useEffect } from 'react';


function App() {
  //Create Array that has a length of 9

  const createBoard = () => (new Array(9)).fill(null);
  const [history, setHistory] = useState(historyData);
  const [boardData, setBoardData] = useState(createBoard);
  const [player, setPlayer] = useState('X');
  const [cpu, setCpu] = useState('O');
  const [roleTurn, setRoleTurn] = useState("player");
  const [winner, setWinner] = useState("")

  useEffect(() => {
    
    setBoardData(createBoard);
    const newHistory = [...history, winner];
    setHistory(newHistory);
    
    
  },[winner]);

 

  const updateBoard = (index) => {
    console.log(`Click at ${index}`)
    const newBoardData = [...boardData];
    console.log(newBoardData[index])
    if (newBoardData[index] === null) {
      if (roleTurn === "player") {
        newBoardData[index] = player;
        setRoleTurn("cpu")
        setBoardData(newBoardData);
      }
      if (roleTurn === 'cpu') {
        newBoardData[index] = cpu;
        setRoleTurn("player")
        setBoardData(newBoardData);
      }

      
      
    } 
  }

  
//handle winner's history

//Winning 
  const isWinning = () => {
    
    const winningLines = [

      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,5],
      [6,7,8],
    ]
    for (let index in winningLines) {
      const [x,y,z] = winningLines[index];
      //Check if boardData has the exact value and all three has the same value or not ?
      if (boardData[x] && boardData[x] === boardData[y] && boardData[x] === boardData[z]) {
          const winner = boardData[x] === 'X' ? 'Player' : 'CPU';
          setWinner(winner);
          return true
      }
    }
    return false;
  }



  function Winner () {
    {isWinning()}
    return(
    <>
      <div>{`Winner is ${winner}`}</div>
    </>);
  }

  function Square (props) {
    return (
      <div className='square' onClick={() => updateBoard(props.index)}>
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
                
                <Square key={index} value={value} index={index}>
                  
                </Square>
              </>
            );
            

         })}
      </div>
    );
  }


  return (
    <div className='App'>
      <h1>Tic-Tac-Toe</h1>
      
      <h1>{`Current Player ${roleTurn}`}</h1>
      <History history={history}/>
      <Winner/>
      <Board/>
    </div>
  );

  
}

export default App
