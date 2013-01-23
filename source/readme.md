This is the root of the extension code. This is the directory you would load into Chrome to test the extension. `manifest.json` is the Chrome extension configuration file.

The sub-directories `html`, `images`, `js` and `styling` are pretty much self-explanatory.

### js

Any third party JavaScript files should go in `js/third-party`, not directly in `js`.

### styling

All LESS files are to be stored in styling/less so only the output CSS files are stored directly in `styling`.