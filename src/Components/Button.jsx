import React from 'react';

function Button ({handleClick, count}){
  return (
    <button onClick={handleClick}>
          count is {count}
    </button>
  )
}



export default Button; 