
export const onInputKeyUp = 
  ( event$, { 
    inputText,
    setInputText,
    promptText, 
    setPromptText,
   } ) => {

  const element = event$.target;

  if ( element.id !== 'promptInput') { 
    return;
  }
  
  if ( 0 > element.clientWidth - element.scrollWidth ) { 
    // above logic detects text overflow
    setInputText( element.innerText );
    console.log( 'overflow set the input text as ', inputText );
    return;
  }

  setInputText( element.innerText );
  element.style.height = element.scrollHeight + "px"

  // if just a cursor and not entire selection.
  if (element.selectionStart !== element.selectionEnd) {
    element.selectionStart = promptText.length;
  }

}
