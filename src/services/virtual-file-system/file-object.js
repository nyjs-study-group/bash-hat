
import { FILE_OBJECT } from '../../types';


// abstract 
export class FileObject {

  static ABSTRACT = FILE_OBJECT;
  ABSTRACT = FILE_OBJECT;

  static TYPE = FILE_OBJECT;
  TYPE = FILE_OBJECT;

  constructor( path, user ) { 
    assertIsString( path );
    assertIsUser( user );
    this.path = path;
    this.user = user;
    this.permissions = 744;
    this.author = user.id;
    this.group = 'no group yet';
    this.created = new Date();
    this.modified = new Date();
  }

  setId( id ) { 
    assertIsInt( id );
    this._id = id;
  }

  touch() { 
    this.modified = new Date();
  }

}
