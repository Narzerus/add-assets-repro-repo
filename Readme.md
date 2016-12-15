# addAssets bug

This is a repro of what I believe is a bug in the build process of meteor packages.

* This repo contains a package (`add-assets-repro-package`) which adds 2 server assets: `files/folder1/0.txt` and `files/folder1/1.txt`.
* The files have different content and different names
* `add-assets-repro-package.js` does some checking with `Assets.absoluteFilePath()` and makes sure it returns the path to the correct file


Running this repo as it is works as expected, to cause the bug to occur do the following:
* Change contents of `folder1/1.txt` to be *exactly* the same as `folder1/0.txt`
* Re-run the app

** Remember to npm/yarn install in the app and package
