
export const onInputKeyDown = 
  ( event$,
    { 
      inputText,
      setInputText,
      promptText,
      setPromptText,
      positionCursor,
    }) => {

  const element = event$.target;

  if ( event$.keyCode === 13 ) { 
    console.log( ' > > > ', element.value );
    event$.preventDefault();
    console.log( inputText, '><>2', element.value, setInputText  );
    setInputText( element.value );

    console.log(element.value ,  ' enter set the input text as ', inputText );

    return;
  }

  // Preventing deletion of the prompt by backspace or delete keys
  // keyCode 8: Backspace
  // keyCode 46: Delete
  if (element.selectionStart <= promptText.length ){
      if (event$.keyCode === 8 || event$.keyCode === 46){
          if (element.selectionStart === element.selectionEnd)
              event$.preventDefault()
          console.log("ACTION FORBIDDEN: Trying to modify prompt")
      }
      positionCursor(element)
      return
  }
  if (event$.keyCode === 13);
      // TODO process command

}