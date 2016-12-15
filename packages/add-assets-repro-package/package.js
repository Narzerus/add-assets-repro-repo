var path = Npm.require("path");
var fs = Npm.require("fs");

var assets = [
  'files/folder1/0.txt',
  'files/folder1/1.txt',
];

Package.info = {
  name: 'add-assets-repro-package',
  version: '0.0.1',
  git: '',
  documentation: 'README.md',
};

Package.describe({
  name: 'add-assets-repro-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('add-assets-repro-package.js');

  api.addAssets(assets, 'server');

});
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.mainModule('add-assets-repro-package-tests.js', ['server']);
});


// function getFilepathsFromFolder(from, recursive) {
//   var files = [];
//
//   for (var i = 0; i <= 1000; i++) {
//     files.push('files/'+i+'.txt');
//   }
//
//   return files;
// }

// function getFilepathsFromFolder(from, recursive) {
//   if (typeof recursive === 'undefined') recursive = true;
//
//   var files = [];
//   // var pathRoot = (process.env.PACKAGE_DIRS)?
//   //   process.env.PACKAGE_DIRS : path.join(path.resolve("."), "packages");
//   var pathRoot = path.join(path.resolve("."), "packages");
//   var pathFolder = path.join(pathRoot, Package.info.name, from);
//   var shallowFiles = fs.readdirSync(pathFolder);
//
//   shallowFiles.forEach(function(file){
//     var pathFile = path.join(pathFolder, file);
//     var stat = fs.statSync(pathFile);
//     if (recursive && stat.isDirectory()) {
//       files = files.concat(getFilepathsFromFolder(path.join(from, file), recursive));
//     } else {
//       files.push(path.join(from, file));
//     }
//   });
//
//   return files;
// }
