# example project

## Setup
```
cd app
yarn # or npm install
cd ..
./codegen.sh
```

## Run
1. run the server-stub `cd server-stub && npm start`
2. Open the project root in vscode.
    Select the `DevServer + App` launch task from the debugger pane.
    Hit 'play'.
    *this will start the webpack-dev-server and open chrome with a custom user-data-dir
    with remote debugging hooked up in vscode*
