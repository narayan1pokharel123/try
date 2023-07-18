import React from 'react'
import { useState,useReducer } from 'react';

const initialState=0;


//single function
const reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return state+1;
    }
    else if(action.type==="DECREMENT"){
        return state-1;
    }
    else if(action.type==="MULTIPLY"){
        return state*2;
    }
    else if(action.type==="DIVISION"){
        return state/2;
    }
    return state;
}


const Reducer = () => {
  const [state,setState]=useState(0);
  const [todos,dispatch]=useReducer(reducer,initialState);
  const increment=()=>{
    setState(state+1);
    
  }

  const decrement=()=>{
    setState(state-1);
    // dispatch({type:"DECREMENT"})
  }

  const multiply=()=>{
    setState(state*1);
  }




  return (
    <div>
        {state}
        {todos}
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>decrement</button>
    </div>
  )
}

export default Reducer

// import React, { useState } from 'react';
// import { useState,useReducer } from 'react';
// const initialState=0;
// const reducer=(state,action)=>{

// }

// const Reducer = () => {
// const [state, setState] = useState(0);
// const [todos,dispatch]=useReducer(reducer,initialState);

// const increment = () => {
// setState(state + 1);
// };

// const decrement = () => {
// setState(state - 1);
// };

// return (
// <div>
// <h1>Counter: {state}</h1>
// <button onClick={increment}>Increment</button>
// <button onClick={decrement}>Decrement</button>
// </div>
// );
// };

// export default Reducer;