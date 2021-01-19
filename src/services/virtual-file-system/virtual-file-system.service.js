
import { VirtualFileObject } from './virtual-file-object';

import { makeInitalFileObjectsData } from './initial-file-objects.factory';

export class VirtualFileSystemService {
    
    constructor( user = 'alfredenewman' ) { 
        this.user = user;
        this.fileObjects = [];
        this.fileObjectsIndex = {};

        const { 
            userInfo,
            fileObjects,
        } = makeInitalFileObjectsData( user );        

        this.current = 2;
        this.currentAbsoluteName = '/users/${user}';

        this.userInfo = userInfo;
        this.userInfo.id = 2;
        
        fileObjects.forEach( fileObjectData => 
            this.add( fileObjectData ) );
        
    }

    add( fileObjectData ) { 
        const { fileObjects } = this;
        const fileObject = 
            new VirtualFileObject( fileObjectData );

        const id = fileObjects.length;
        this.fileObjects = [ ...fileObjects, fileObject ];
        fileObject.id = id;
        return fileObject;
    }

    cd( { name, isAbsolute, shiftDirectories } ) { 
        const absoluteName = this.getAbsoluteName(
            { name, shiftDirectories });
            
        this.current = id;
        this.currentAbsoluteName = absoluteName;
        return this.fileObjects[ id ];   
    }
 

    pwd() { 
        return this.fileObjects.currentAbsoluteName;
    }

    rm( { name, isAbsolute, recursive, shiftDirectories } ) { 

        const absoluteName = this.getAbsoluteName( { 
            name, shiftDirectories
        });
        const id = this.getIdByAbsoluteName( absoluteName );

        if ( id === undefined ) { 
            return null;
        }

        if ( fileObject.type !== 'd' ) {
            this._removeChild( )            
        }

        if ( !recursive ) { 
            return { error: 'cannot delete directory'} 
        }

 
        Object.keys( this.fileObjectsIndex )
            .forEach( name => 
                this._removeChild( {
                    name,
                    id: this.getIdByAbsoluteName( name )
                    }
                )
            );
    }

    _removeChild( { name, id }) {
        const { fileObjects } = this;
        this.fileObjects = [ 
            fileObjects.slice( 0, id ),
            fileObjects.slice( id ),    
        ];
        delete this.fileObjectsIndex[ name ];
    }

    getIdByAbsoluteName( absoluteName ) { 
        const id = this.fileObjectsIndex[ absoluteName ];
        if ( id === undefined ) return null;

        return id;
    }

    getAbsoluteName( { name, shiftDirectories } ) {
        const pwd = this.pwd().split('/');

        if ( !name || name === `~` || name === '$HOME' ) { 
            name = this.userInfo.home;
        }

        if ( !!shiftDirectories ) { 
            if ( pwd.length < shiftDirectories - 1 ) { 
                return null;
            }
            pwd = pwd.slice( 0, -shiftDirectories );
        }

        let absoluteName = !name
            ? this.pwd()
            : `${this.pwd}/${name}`;
        
    }

}