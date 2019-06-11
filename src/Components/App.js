import React from 'react';
import { CHANGE_TEXT } from '../actions/types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './App.css';

export const App = () => {
  const currentText = useSelector(state => state.text.text);
  const dispatch = useDispatch();

  const handleChangeText = function(e) {
    
  }
  
  
  return (
    <div className="App">
      <textarea className="TextIn"
        onChange={(e) => dispatch({ type: CHANGE_TEXT, text: e.target.value })}
      >
      </textarea>
      <div className="TextOut">
        {currentText}
      </div>
    </div>
  )
}