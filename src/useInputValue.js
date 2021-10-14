import {useState} from 'react';

function useInputValue(initialValue) {


  // create bits of state with an input param

  const [inputValue, setInputValue] = useState(initialValue);


  // create a generic event handler

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  // reset the state
  
  const clearInput = () => {
    setInputValue('');
  }

  return [ inputValue, handleChange, clearInput ]
}



export default useInputValue;