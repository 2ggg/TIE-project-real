import { useState } from 'react';

const useInput = (inputValue) => {
  const [value, setValue] = useState(inputValue);
  const Handler = (e) => {
    setValue(e.target.value)
    console.log(value);
  }
  return [value, Handler];
}

export const useInputValue = (inputValue) => {
  const [value, setValue] = useState(inputValue);
  const Handler = (e) => {
    setValue(e.target.value);
    console.log(value);
  }
  return [value, setValue, Handler];
}

export default useInput;




