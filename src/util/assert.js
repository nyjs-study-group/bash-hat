
import { 
  FILE_OBJECT,
  FILE_SYSTEM,
  FILE,
  DIRECTORY,
  LINK,
  USER,
} from '../types';

/**
 * @description Assert functions are simply a short hand 
 * method to cause a specific error to be throw when a 
 * condition is false.
 * 
 * In this module, assert is the basic method, while 
 * the rest of the methods implement assert.
 * 
 * This is often used for type checking of passed parameters.
 * @param { boolean } condition 
 * @param {*} message 
 */
export const assert = ( condition, message ) => {
  if ( !condition ) { 
    throw new Error( message );
  }
}

export const assertIsString = ( value, message ) =>
  assert( 
    typeof value === 'string', 
    message || 'Invalid type: string expected',
  );

export const assertIsInt = ( value, message ) =>
  assert( 
    typeof value === 'string', 
    message || 'Invalid type: integer expected',
  );

export const assertIsFileObject = ( value, message ) =>
  assert(
    value.ABSTRACT === FILE_OBJECT,
    message || 'Invalid type: File Object expected'
  );

export const assertIsFileSystem = ( value, message ) =>
  assert(
    value.TYPE === FILE_SYSTEM,
    message || 'Invalid type: File Object expected'
  );

export const assertIsFile = ( value, message ) =>
  assert(
    value.TYPE === FILE,
    message || 'Invalid type: File expected'
  );

export const assertIsDirectory = ( value, message ) =>
  assert(
    value.TYPE === Directory,
    message || 'Invalid type: Directory expected'
  );

export const assertIsLink = ( value, message ) =>
  assert(
    value.TYPE === LINK,
    message || 'Invalid type: Link expected'
  );

export const assertIsUser = ( value, message ) =>
  assert(
    value.TYPE === USER,
    message || 'Invalid type: User expected'
  );