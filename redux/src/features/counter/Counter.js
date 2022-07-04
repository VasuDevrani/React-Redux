import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, reset, increamentByAmt } from "./counterSlice.js";

import "./counter.css";

export default function Counter() {
  // as app is inside the stateprovider we can use count state variable
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // for increment by amount
  const [text, setText] = useState('');

  function addMore(){
    if(text.length > 0){ 
      var val = parseInt(text);
      dispatch(increamentByAmt(val));
    }
    setText("");
  }

  return (
    <div className="app">
      <section>
        <p>{count}</p>
        <div className="btn">
          <button onClick={() => dispatch(decreament())}>-</button>
          <button onClick={() => dispatch(reset())}>R</button>
          <button onClick={() => dispatch(increament())}>+</button>
        </div>
        <input type="text" placeholder="enter the amount" value ={text} onChange={(e) => setText(e.target.value)} onSubmit={addMore}/>
        <button onClick={addMore}>Add Amount</button>
      </section>
    </div>
  );
}
