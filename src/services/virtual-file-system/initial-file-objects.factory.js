
import { VirtualFileObject } from '.';

export const makeInitalFileObjectsData = user => { 
    const rightNow = new Date();
    const group = 'staff';
    const home = '/users/${user}';

  
    return {

        userInfo: { 
            created: rightNow,
            user,
            home,
            homeId,
            group,
        },
        fileObjects: [ 
            {
                name: '/',
                type: 'd',
                author: user,
                exec: null,
                items: 1,
                created: rightNow,
                modified: rightNow,
                size: 0
            },
            {
                name: '/users', 
                type: 'd',

                author: user,
                exec: null,
                content: null,
                group: 'staff',
                items: 1,
                created: rightNow,
                modified: rightNow,
                size: 0,
            },
            {
                name: home, 
                type: 'd',

                author: user,
                content: null,
                exec: null,
                group: 'staff',
                items: 1,
                created: rightNow,
                modified: rightNow,
                size: 0,
            },
            {
                name: '/users/${user}/Desktop', 
                type: 'd',

                author: user,
                content: null,
                group: 'staff',
                items: 1,
                created: rightNow,
                modified: rightNow,
                size: 0,
            },
            {
                name: '/users/${user}/Desktop/readme',
                type: '-',

                author: user,
                content: 'This is your first file!',
                group: 'staff',
                items: 1,
                modified: rightNow,
                size: 24,
            },
        ]
    }
};
