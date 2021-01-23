

import { parseCommand } from './command-parser.service';

describe(
    `This is to test the command line parser`,
    () => {

        test( `see if it can parse 'ls'`,
            () => {
                const text = 'ls';
                const expectedResult = {
                    command: 'ls',
                    args: []
                };

                const commandInfo = parseCommand( text );
                expect( commandInfo ).toEqual( expectedResult );
            }
        );

        return;
        
        test( `see if it can parse 'ls -l'`,
            () => {
                const text = 'ls -l';
                const expectedResult = {
                    command: 'ls',
                    args: ['l'],
                };

                const commandInfo = parseCommand( text );
                expect( commandInfo ).toEqual( expectedResult );
            }
        );

        test( `should be able to parse ls -la`, 
            () => {
                const text = 'ls -la';
                const expectedResult = {
                    command: 'ls',
                    args: '-la',
                }
            }
        );

        test( `should be able to parse ls folder-name`,
            () => {
                const text = 'ls folder-name';
                const expectedResult = {
                    command: 'ls',
                    args: [ 'folder-name' ],
                }
            }
        );

        test( `should be able to parse ls -l folder-name`,
            () => {
                const text = 'ls folder-name';
                const expectedResult = {
                    command: 'ls',
                    args: [ 'l', 'folder-name' ],
                }
            }
        );

        test( `should be able to parse cd ../`,
            () => { 

            }
        );
    }
);