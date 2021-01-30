
import { FileObject } from './file-object'

import {
  FILE,
  FILE_OBJECT,
} from '../../types';
import { assertIsInt } from '../../util/assert';

export class File extends FileObject {

  static TYPE = FILE;
  TYPE = FILE;

  constructor( path, user ) { 
    super( path, user );
    this.content = '';
  }

  setContent( text ) { 
    this.content = text;
  }

  getContent() { 
    return this.content;
  }

  
  
}