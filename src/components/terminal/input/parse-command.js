
const lsCommandEntered = 'ls -lr';
const mkdirCommandEntered = 'mkdir whodat';
const npmCommandEntered = 'npm install --save-dev';


const npmCommandParsed = {
    command: 'npm',
    options: [ 'install', 'D' ],
}

const runSomething = ( parsedCommandObject ) => {
    bunchOCommands[ parsedCommandObject.command ]( parsedCommandObject.options );
}


const bunchOCommands = { 
    ls: ( options ) => { 
        // run me
    },
    npm: ( options ) => {
        // run me.
    }
}

const lsCommandParsed = {
    command: 'ls',
    options: [ 'l', 'r' ],
}

const commandName = 'ls';

bunchOCommands.ls( options );
bunchOCommands[ 'ls' ]( options );
bunchOCommands[ commandName ]( options );
bunchOCommands[ lsCommandParsed.command ]( lsCommandParsed.options );
