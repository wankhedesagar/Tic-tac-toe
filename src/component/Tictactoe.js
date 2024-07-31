import React,{useState} from 'react'

function Tictactoe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);




    const handleClick = (index) => {
     
        console.log(index, "clicked");
        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";
        setBoard(newBoard);
        setXTurn(!isXTurn);
       
      };

    const renderSquare = (index) => {
        return(
            <button onClick={() => handleClick(index)} className='square'>{board[index]}</button>
        )
    }
  return (
   
    <div className="board">
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
  )
}

export default Tictactoe