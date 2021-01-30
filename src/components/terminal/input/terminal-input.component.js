
import React, { useEffect, useState } from 'react';

import { onInputKeyDown } from './on-input-key-down';
import { onInputKeyUp } from './on-input-key-up';

import '../terminal.component.css';

export const TerminalInput = props => {
  
  const [inputText, setInputText] = useState('');
  console.log( '>>>>>>>>>>>>>>>>>>>>>>>>>', inputText )
  const [promptText, setPromptText] = useState('( base ) Alfred-MBP:~ alfredenewman$ ');

  onClick = e => { 
    if (e.target.selectionStart <= promptText.length) positionCursor(e.target) 
  }

  const positionCursor = 
    element => element.selectionStart = promptText.length;

  onFocus = e => positionCursor(e.target)

  

  const effectsParams = {
    inputText,
    setInputText,
    promptText,
    setPromptText,
    positionCursor,
  }

  useEffect(() => {
    const inputElement = document.getElementById("promptInput");
    inputElement.value = promptText;

    positionCursor(inputElement);

    const onInputKeyUpMethod =
      event$ => onInputKeyUp( event$, effectsParams );

      const onInputKeyDownMethod =
      event$ => onInputKeyDown( event$, effectsParams );

    inputElement.addEventListener( 'keyup', onInputKeyUpMethod );
    inputElement.addEventListener('keydown', onInputKeyDownMethod);

    // inputElement.addEventListener('click', onClick );

    return () => {
      inputElement.removeEventListener('keyup', onInputKeyUpMethod );
      inputElement.removeEventListener('keydown', onInputKeyDownMethod );
      // inputElement.removeEventListener('click', onClick);
    }
  });


  return (
    <div className="input terminal">

      <textarea id="promptInput"
        className="prompt input" />

    </div>
  );
}