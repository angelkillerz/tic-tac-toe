import React from 'react';


function History(props) {
  return (
    <div className='history'>
        <p>Winner's History:</p>
        {props.history.length > 0 && props.history.map((winner,index) => {
            return(
                <p key={index}>{`${winner}`}</p>
            );
        })}
    </div>
  )
}

export default History;