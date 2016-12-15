// Write your package code here!
import _ from 'lodash';

// Variables exported by this module can be imported by other packages and
// applications. See add-assets-repro-package-tests.js for an example of importing.
export const name = 'add-assets-repro-package';


const paths = [
  'files/folder1/0.txt',
  'files/folder1/1.txt',
];

/**
 * Check if somehow the relative path is NOT contained in the asset's absolute path.
 *
 * Here I seem to be getting an absolute path corresponding to another relative path, for example
 * I ask for `foo/bar/greencon/_utilities.scss`
 * I get `<absolute path>/foo/bar/bigbusiness/_utilities.scss`
 * NOTE: I'm getting the path of the bigbusiness file instead of the greencon one
 */

console.log('-- Reading the following files --');
paths.map((path) => console.log(path));
console.log(`--------------\n`)
const missmatches = _(paths)
  // .filter((path) => Assets.absoluteFilePath(path).indexOf(path) === -1)
  .map((path) => {
    const absolute = Assets.absoluteFilePath(path);
    console.log(`=== ${path} ===`);
    if (absolute.indexOf(path) === -1) console.log(' >> PATH MISSMATCH <<');
    console.log(`* Relative path:  ${path}`);
    console.log(`* Absolute path:  ${Assets.absoluteFilePath(path)}`);
    console.log(`* Assets.getText() result: ${Assets.getText(path)}`);
    return path;
  })
  .value();
