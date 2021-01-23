
export const parseCommand = text => {
    // text = 'ls';
    const splitText = text.split(' ');
    // [ 'ls' ]

    // console.log( splitText, 'split text ' );

    const command = splitText[ 0 ];
    const unParsedArgs = splitText[ 1 ]; // '-la'

    if ( unParsedArgs === undefined ) { 
        return { command, args: [] }
    }

    const argsWithoutHyphen = unParsedArgs.slice( 1 ); // 'la'
    const args = argsWithoutHyphen.split(''); // [ 'l', 'a' ];

    return { command, args }
    // old js looks like this
    // return { command: command, args: args };
}