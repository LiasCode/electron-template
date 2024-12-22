## Electron Template with Agnostic Frontend

### Features

- Frontend agnostic
- Fast development with esbuild
- Easy build configuration with electron-builder
- Include Sqlite Database
- Customizable scripts

### Usage

```bash
  # Recomended to use bun
  npm install
```

```bash
  # Runs the app in the development mode.
  npm run dev 
```

```bash
  # Builds the app in unpackage mode in the `release/${version}` folder.
  npm run package 
```

```bash
  # Builds the app and compile to targets specified in the `builder.config.mjs`
  # file for production in the `release/${version}` folder.
  npm run builder 
```

### Build Configuration

This project uses the `electron-builder` package to build the app.

Refer to the [Electron Builder documentation](https://www.electron.build/index.html) for more details.

The build configuration is in the `builder.config.mjs` file. You can specify the targets and other options in this file.

### Life Cycle scripts

The scripts in the script folder are used to run the app in development mode and to build the app.

If you are familiar with the setup, feel free to modify the script files.

The script files are essential for the functionality of this project.

### Important Notes

- The frontend project should have `dev` and `build` scripts
- The frontend build most be in the `frontend/dist` folder
- if you are using Vite.js set `base: "./"` in the vite config.
- It is recommended to use hash-based routing. Most frameworks already have this implemented.
