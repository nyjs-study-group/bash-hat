
import React, { useEffect, useState } from 'react';



import '../terminal.component.css';

export const TerminalInput = props => {

    const onKeyUp = event$ => {
        const element = event$.target;
        const { clientWidth, scrollWidth } = element;

        if ( element.id !== 'promptInput') { 
            return;
        }

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

    const [ inputText, setInputText ] = useState('');

    
    useEffect( () => {
        window.addEventListener('keyup', onKeyUp );

        return () =>
          window.removeEventListener('keyup', onKeyUp );
      }
    );
    
    return (
        <div className="input terminal">

            <div className="prompt status">
                ( base ) Alfred-MBP:~ alfredenewman$ 
            </div>

            <div id="promptInput" 
                className="prompt input" contentEditable>
            </div>
        </div>
    );
}