
export const parseEnteredInput = inputText => {
    // here you need separate the parts 
    // of the input text
    // for example: ls -l
    // needs to be the command 'ls' with option 'l'

    // you can use inputText.split(' ');
    // or regexp which you can test here.
    // https://regex101.com/

    return { 
        command: '',
        options: ['', ''],
    }
}

