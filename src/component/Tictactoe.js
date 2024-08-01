import React,{useState} from 'react'

function Tictactoe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);


    const checkWinner = (board) => {
        const combination = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < combination.length; i++) {
          const [a, b, c] = combination[i];
          if (board[a] === board[b] && board[b] === board[c]) {
            return combination[i];
          }
        }
        return null;
      };

    const handleClick = (index) => {
        if (board[index] !== null) {
          return;
        }
        console.log(index, "clicked");
        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";
        setBoard(newBoard);
        setXTurn(!isXTurn);
        const winnerCombination = checkWinner(newBoard);
        if (winnerCombination) {
          setWinner(newBoard[winnerCombination[0]]);
        }
      };

    const renderSquare = (index) => {
        return(
            <button onClick={() => handleClick(index)} className='square'>{board[index]}</button>
        )
    }



    
  return (
    <React.Fragment>
      <h1 className="heading">Tic-Tac-Toe</h1>
      <div className="msg-container"> 
      {winner && `${winner} is winner of this Game.`}
      </div>

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
  <div className="buttons">
    <button className="reset_button">Reset Game</button>
    <button className="new_game_button">New Game</button>
  </div>
  </React.Fragment>
  )
}


export default Tictactoe;