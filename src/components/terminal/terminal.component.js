import React from 'react';

export const Terminal = props => (
    <div id="terminal" className="terminal" contentEditable>
        <h3>Put the virtual terminal here.</h3>

        <p>Project Bash Hat is to create a virtual terminal that 
            will help newbies learn how to use basic bash commands.
        </p>

        <p>If you want to participate is this project, the next meeting 
            is online at: <br/>
            <a href="https://global.gotomeeting.com/join/296494701">
                https://global.gotomeeting.com/join/296494701 </a>
            on Saturday 1/13 at 11:00.  
        </p>

        <p>Take a look at the notes below to get started.  
            Try to research for and solve some of these problems ahead of time if 
            you wish.
        </p>

        <p>Notice this is an editable div made using the contentEditable attribute of
            a standard html div element.
        </p>

        <p><b>Todo 1</b>: Let's style this to make it look something 
        like the default terminal either from a Mac or Linux machine.
        </p>

        <p><b>Todo 2</b>: Let's style this to make it look something 
        like the default terminal either from a Mac or Linux machine.
        </p>

        <p><b>Todo 3</b>: Let's put in some javascript to listen to the 
            div events to put the contents of the div into console.log( ... )
            every time a key is pressed into it.<br/>

            Note: The contents of the div will actually be html.  We will 
            soon have to parse this content to separate commands.
    
        </p>
    </div>
);