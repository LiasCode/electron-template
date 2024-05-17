// @ts-check

/** @type {import('electron-builder').Configuration} */
export const ELECTRON_BUILDER_CONFIG = {
  appId: "YourAppID",
  removePackageScripts: true,
  asar: true,
  productName: "electron-template",
  directories: {
    output: "release/${version}",
  },
  files: ["./dist/frontend", "./dist/electron"],
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}-Windows-${version}-Setup.${ext}",
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
  linux: {
    target: ["AppImage"],
    artifactName: "${productName}-Linux-${version}.${ext}",
  },
};
