import React from 'react'

function Tictactoe() {

    const renderSquare = () => {
        return(
            <button className='square'>X</button>
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