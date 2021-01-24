
import React, { useEffect, useState } from 'react';



import '../terminal.component.css';

export const TerminalInput = props => {

    const onKeyUp = event$ => {
        const element = event$.target;
        const { clientWidth, scrollWidth } = element;

        if ( element.id !== 'promptInput') { 
            return;
        }

        element.style.height = element.scrollHeight + "px"

        if (element.selectionStart !== element.selectionEnd)
                    element.selectionStart = promptText.length

        // Enter key is hit
        if ( event$.keyCode === 13 ) { 
            
            setInputText( element.innerText );
            console.log( ' enter set the input text as ', inputText );


        } else if ( 0 > element.clientWidth - element.scrollWidth ) { 
            // above logic detects text overflow

            setInputText( element.innerText );
            console.log( 'overflow set the input text as ', inputText );
        } else {

            setInputText( element.innerText );
        }
    }

    const onKeyDown = event$ => {
        const element = event$.target;

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

    onClick = e => { if (e.target.selectionStart <= promptText.length) positionCursor(e.target) }

    onFocus = e => positionCursor(e.target)

    const positionCursor = element => element.selectionStart = promptText.length

    const [ inputText, setInputText ] = useState('');
    const [ promptText, setPromptText ] = useState('( base ) Alfred-MBP:~ alfredenewman$ ');

    
    useEffect( () => {
        const element = document.getElementById("promptInput")
        
        element.value = promptText

        positionCursor(element)

        window.addEventListener('keyup', onKeyUp );
        document.getElementById('promptInput').addEventListener('keydown', onKeyDown );
        document.getElementById('promptInput').addEventListener('click', onClick );

        return () => {
            window.removeEventListener('keyup', onKeyUp );
            document.getElementById('promptInput').removeEventListener('keydown', onKeyDown );
            document.getElementById('promptInput').removeEventListener('click', onClick );
        }
      }
    );

    
    return (
        <div className="input terminal">

            <textarea id="promptInput" 
                className="prompt input" />
            
        </div>
    );
}