import React from 'react';
import { Terminal } from '../terminal';

// Note importing .css code here will apply the styles 
// into the .jsx code
import './panel.component.css';

export const Panel = props => (
    <div className="container panel">
        { props.children }
    </div>
);

/**
 * In the above, notice the function format is 'fat arrow'
 * with a single parameter being passed.  
 * 
 * Also notice that the function above uses parentheses
 * to enclose the .jsx code.  .jsx is a mix of 
 * .html and javascript.  
 * The .jsx code is returned automatically because 
 * the function does not use curly braces 
 * to enclose its body.
 * 
 * The function above could have looked like: 
 * 
 * export function Panel( props ) { 
 *  return ( <div>...</div> )
 * }
 * 
 * OR this: 
 * export const Panel = ( props ) => { 
 *  return ( <div>...</div> );
 * }
 * 
 * 
 * FINALLY: 
 * in .jsx, putting something inside curly braces
 * means it is treated as a javascript variable or method.
 * 
 * in this case: { props.children } will return the content 
 * that was placed between the <Panel> open and close tags 
 * in App.js
 */

