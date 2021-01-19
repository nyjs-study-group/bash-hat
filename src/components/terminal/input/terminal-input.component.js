
import React, { useEffect, useState } from 'react';

import '../terminal.component.css';

export const TerminalInput = props => {

    const [ inputText, setInputText ] = useState('');
    
    useEffect( () => {
        window.addEventListener('keydown', onInputKeyDown );
        // window.addEventListener('keyup', onKeyUp );

        return () =>
            window.removeEventListener('keydown', onInputKeyDown );
            // window.removeEventListener('keyup', onKeyUp );
      }
    );
    
    return (
        <div className="input terminal">

            <div className="prompt status">
                ( base ) Alfred-MBP:~ alfredenewman$ 
            </div>

            <div className="prompt input">
                <div id="promptInput" 
                     className="prompt input inner" contentEditable></div>
            </div>
        </div>
    );
}