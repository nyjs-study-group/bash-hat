
// this needs to track the following about 
// the virtual file objects: 
// type: d = directory, l = link, - = file
// creator ( author ) = alfredenewman
// size in bytes. 
// group = staff
// item count if file 1, if directory, 
// number of file objects in that directory.
// last modified date 
// file name: 
// content 


// By default, the file system should 
// have a users folder and inside that 
// an alfredenewman folder

const fileObjects = { 
    users: { 
        alfredenewman: { 
            Desktop: { 
                isCurrent: true,
                resume: { type }
            }
        }
    }
}

// virtual file system must track the current directory 

const fileSystem = { 
    currentFileObject: 'users/alfredenewman',
    fileObjectList: [ 
        { name: 'users', type: 'directory' },
        { name: 'users/alfredenewman', type: 'directory' },
        { name: 'users/alfredenewman/Desktop', type: 'file' },
    ]
};

const cd = args => { 
    const name = args[ 0 ];
    if ( name === '../../' ) { 
        currentFileObject = 
            currentFileObject.split('/')
                .slice( 0, -1 )
                .join('/');
    }

    currentFileObject = [ ...currentFileObject, name ];
}







