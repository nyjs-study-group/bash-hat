
import { FILE_OBJECT, FILE_SYSTEM } from '../../types';

import { assert, assertIsFileObject } from '../../util/assert';

import { 
  Directory,
  File,
  Link,
} from './';

export class VirtualFileSystem {

  static TYPE = FILE_SYSTEM;
  TYPE = FILE_SYSTEM;

  constructor() { 
    

    this.files = [ { path: 'one' } ];
    this.filesIndex = {}
    this.TYPE = FILE_SYSTEM;
  }

  addFile( path, user ) {
    const file = new File( path, user );
    this.addFileObject( file );
  }

  addDirectory( path, user ) { 

  }

  addLink( path, target, user ) { 

  }

  ls( path ) { 

  }

  addFileObject( fileObject ) { 
    assertIsFileObject( fileObject );
    assert( fileObject.isValid(), 'file object is not fully formed');

    // if ( !!this.filesIndex[ fileObject.path ]) { 
    //   this.updateFile( fileObject );
    //   return;
    // }

    const id = this.files.push( file ) - 1;
    fileObject.setId( id );
    this.filesIndex[ fileObject.path ] = id;
  }

  

  getFileByPath( path ) { 
    return this.files[ this.filesIndex[ path ] ];
  } 

}