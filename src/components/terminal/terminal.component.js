import React from 'react';

import { TerminalInput } from './input';
import { TerminalOutput } from './output';

import './terminal.component.css';

export const Terminal = props => (
    <div id="terminal" spellCheck={false} className="container terminal">
        {/* <div className="header terminal">
            Bash Hat Virtual Terminal
        </div> */}
        
        <div className="content terminal">
            
            <TerminalOutput/>

            <TerminalInput/>

        </div>

    </div>
);