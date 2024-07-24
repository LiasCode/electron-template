## Electron Template with Agnostic Frontend

## FEATURES

- Frontend agnostic
- Fast development with esbuild
- Easy build configuration with electron-builder
- Include Sqlite Database
- Customizable scripts

## USAGE

```bash
$ npm install
```

## IMPORTANT SCRIPTS

In the root project directory, you can run:

### `npm run dev`

Runs the app in the development mode.`<br>`

### `npm run package`

Builds the app in unpackage mode in the `release/${version}` folder.`<br>`

### `npm run builder`

Builds the app and compile to targets specified in the `builder.config.mjs` file for production in the `release/${version}` folder.`<br>`

## BUILD CONFIGURATION

This project uses the `electron-builder` package to build the app.

Refer to the [Electron Builder documentation](https://www.electron.build/index.html) for more details.

The build configuration is in the `builder.config.mjs` file. You can specify the targets and other options in this file.

## SCRIPTS

The scripts in the script folder are used to run the app in development mode and to build the app.

If you are familiar with the setup, feel free to modify the script files.

The script files are essential for the functionality of this project.

## IMPORTANT NOTES

- Remember to install frontend dependencies.
- The frontend project should have `dev` and `build` scripts
- The Frontend build most be in the `frontend/dist` folder
- if you are using Vite.js set `base: "./"` in the vite config.
- It is recommended to use hash-based routing. Most frameworks already have this implemented.
