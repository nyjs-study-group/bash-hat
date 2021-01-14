# Bash Hat

This is a project that will create a virtual terminal and visualization in a React App.

The next workshop is Saturday, 1/16 an [https://global.gotomeeting.com/join/296494701](https://global.gotomeeting.com/join/296494701)

If you run this app in your machine, the home page will have further notes and some things to think
about ahead of time if you want to get a head start when we work on it on Saturday.

Feel free to go as far as you think you can before then.

Additionally, notes are scattered throughout the code to provide hints as to what is going on.

To run this project: 

clone the project: 
```git clone https://github.com/nyjs-study-group/bash-hat.git```

install the project: 
```
  cd bash-hat
  npm run install
```

start the project: 
```
  npm run start
```

view the project in your web browser at
http://localhost:1234



# Nano React App Default Javascript Template

The default template project for [nano-react-app](https://github.com/adrianmcli/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/nano-react-app/babel-preset-nano-react-app) is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

With Parcel's `--public-url` flag, use the following scripts for deployment:

```
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html --public-url '.'",
  "predeploy": "rm -rf dist && parcel build index.html --public-url '.'",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.
