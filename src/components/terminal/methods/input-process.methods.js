

const doesTextOverflowDiv = element =>
    element.clientWidth - element.scrollWidth < 0;


const handleDelete = ( event$ ) => {
    console.log( 'handleDelete' );
}

const handleEnter = ( event$ ) => {
    console.log( 'handle enter');
}

const handleCopy = ( event$ ) => {
    console.log( 'handle copy');
}

const handlePaste = ( event$ ) => {
    console.log( ' paste is here' );
}

const handleUp = ( event$ ) => { 
    console.log( 'handle up');
}

const handleDown = ( event$ ) => { 
    console.log( 'handle down');
}

const macMetaKeyHandlers = {
    67: handleCopy, // c
    86: handlePaste, // v 
}

const macCtrlKeyHandlers = {
    65: handleGotoStartLine, // A
    69: handleGotoEndLine, // E 
    85: handleDeleteToStartLine, // U
}

const winLinuxCtrlKeyHandlers = {
    ...macMetaKeyHandlers,
    67: handleCopy,
    86: handlePaste,
}

const isMac = navigator.platform.slice(0, 3).toLowerCase() === 'mac';

export const metaKeyHandlers = 
    !!isMac ? macMetaKeyHandlers : {};

export const ctrlKeyHandlers = 
    !!isMac ? macCtrlKeyHandlers : winLinuxCtrlKeyHandlers;





/**
 * @description
 * This method needs to be completed in order 
 * parse the text that comes from the input area
 * into a command and its options. 
  */

export const parseEnteredInput = inputText => {
    // here you need separate the parts 
    // of the input text
    // for example: ls -l
    // needs to be the command 'ls' with option 'l'

    // you can use inputText.split(' ');
    // or regexp which you can test here.
    // https://regex101.com/

    return { 
        command: '',
        options: ['', ''],
    }
}

