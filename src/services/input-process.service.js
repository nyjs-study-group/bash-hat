
import { ctrlKeyHandlers, metaKeyHandlersa } from '../components/terminal/methods/input-process.methods';

export class InputProcessService {
    constructor( virtualFileSystem ) { 
        this.virtualFileSystem = virtualFileSystem;
        this.isMac = navigator.platform.toLowerCase().slice(0,3) === 'mac';
    }

    onInputKeyDown( event$, setInputText ) {
        const { ctrlKey, key, keyCode, metaKey } = event$;
        const { isMac, virtualFileSystem } = this;
        
        let result;

        if ( !!metaKey && !!isMac ) {
            result = 
              macMetaKeyHandlers[ keyCode ]( 
                  event$, virtualFileSystem, setInputText 
              );
        }
        
        if ( !!ctrlKey ) {
            result = 
                ctrlKeyHandlers[ keyCode ]( 
                    event$, virtualFileSystem, setInputText, 
                );
        }

        result = { key };


        if ( !!result.command ) {
            result = virtualFileSystem[ result.command ]( result );
            setInputText( result.inputText );
            return result;
        }

    }
}

