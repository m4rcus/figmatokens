{
  "name": "style-dictionary-auto-rebuild-watcher",
  "version": "1.0.0",
  "description": "",
  "main": "build/index.js",
  "files": [
    "build",
    "properties"
  ],
  "scripts": {
    "build": "node ./build.js",
    "clean": "rm -rf build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "Apache-2.0",
  "devDependencies": {
    "style-dictionary": "3.7.2"
  }
}
