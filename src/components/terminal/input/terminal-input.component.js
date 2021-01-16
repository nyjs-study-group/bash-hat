import React from 'react';

import '../terminal.component.css';

export const TerminalInput = props => (
    <div className="input terminal">
        <div className="prompt status">
            ( base ) Robert-MBP:~ robertlamarca$ 
        </div>
        <div className="prompt input" contentEditable>

        </div>
    </div>
)