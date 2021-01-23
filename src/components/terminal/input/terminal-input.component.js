
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
        // return
        const element = event$.target;
        
        console.log("Event: ",event$)
        console.log("Caret at: ",element.selectionStart)
        console.log("offsetHeight: ",element.offsetHeight)
        console.log("rows: ",element.rows)
        console.log("scrollHeight: ",element.scrollHeight)

        // Preventing deletion of the prompt by backspace or delete keys
        // keyCode 8: Backspace
        // keyCode 46: Delete
        if (element.selectionStart <= promptText.length ){
            if (event$.keyCode === 8 || event$.keyCode === 46){
                console.log("ACTION FORBIDDEN: Trying to modify prompt")
            }
            positionCursor(element)
            return
        }
        if (event$.keyCode === 13);
            // TODO process command

    }

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
        // document.getElementById('promptInput').addEventListener('onchange', onChange );

        return () => {
            window.removeEventListener('keyup', onKeyUp );
            document.getElementById('promptInput').removeEventListener('keydown', onKeyDown );
            // document.getElementById('promptInput').removeEventListener('onchange', onChange );
        }
      }
    );

    // window.document.onloadstart.getElementById("promptInput").value = promptText
    
    return (
        <div className="input terminal">

            {/* <div className="prompt status">
                { promptText }
            </div> */}

            <textarea id="promptInput" 
                className="prompt input" />
            
        </div>
    );
}