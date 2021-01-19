
const initialFileObjectData = { 
    name: null,
    type: null,
    author: null,
    exec: null,
    items: 0,
    created: null,
    modified: null,
    permissions: 'rwx------',
    size: 0,
}

export class VirtualFileObject {

    constructor( fileSystem, fileObjectData ) { 
        this.fileSystem = fileSystem;
        this.fileObjectData = { 
            ...initialFileObjectData,
            ...fileObjectData
        };

        this.id = fileSystem.next();
        if ( this.type === 'd' ) { 
            this.fileObjectData.childrenIndex = {}
            this.fileObjectData.childCount = 0;
        }
        const namePath = this.name.split('/');
        if ( namePath.length > 1 ) { 
            this.fileObjectData.path = 
                namePath.slice( 0, -1 );
        }
    }

    get id() { return this.fileObjectData.id }

    set id( id ) { this.fileObjectData.id = id }

    get name() { return this.fileObjectData.name }

    get type() { return this.fileObjectData.type }

    get author() { return this.fileObjectData.author }

    get group() { return this.fileObjectData.group }

    get items() { return this.fileObjectData.items }

    get modified() { return this.fileObjectData.modified }

    get size() { return this.fileObjectData.size }

    get permissions() { return this.fileObjectData.permissions }

    get parent() {
        const namePath = this.name.split('/');
        if ( namePath.length < 2 ) { 
            return null;
        }
        
        return this.fileSystem.getByName(
            namePath.slice( 0, -1 ).join('/')
        );
    }

    addChild( fileObjectData ) { 
        const child = 
            this.fileSystem.add( fileObjectData );
        this.childrenIndex[ child.id ] = child.name;
        this.childCount++;
        return child;
    }

    get childrenIndex() { 
        return this.childrenIndex;
    }

    get content() { 
        return this.fileObjectData.content;
    }

    set content( content ) { 
        this.fileObjectData.content = content;
    }

    get itemCount() { 
        return this.type === 'd'
            ? this.fileObjectData.childCount 
            : 1;
    }

    getChildByName( name ) { 
        const idToGet = this.childrenIndex[ name ];
        if ( idToGet === undefined ) { 
            return null;
        }

        return this.fileSystem.getById( idToGet );
    }

}