import React from 'react'

function ResetButton(props) {
  return (
    <button onClick={props.setBoardData(props.createBoard)}>Reset</button>
  )
}

export default ResetButton