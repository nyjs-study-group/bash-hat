
export { Visualization } from './visualization.component';

/*
    We use this index.js file to export objects 
    from other files within this folder.

    The use of an index.js file for this purpose is 
    sometimes called a "barrel file".

    This simplifies exports elsewhere in the project in two ways.

    First, an import that looks like this: 
    import { Header } from './components/header/header.component'
    can now look like: 
    import { Header } from './components/header';

    This is possible because in Node projects, you can import objects 
    from any folder by only using the folder name IF that folder contains an 
    index.js file AND if that index.js file is exporting objects.

    Second, it is possible to import multiple  objects 
    from this single file rather than on several import lines.

    The syntax: 
    export { Header } from './header'
    is using export as both an import and an export statement.
*/