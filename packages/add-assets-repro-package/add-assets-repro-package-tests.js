// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by add-assets-repro-package.js.
import { name as packageName } from "meteor/add-assets-repro-package";

// Write your tests here!
// Here is an example.
Tinytest.add('add-assets-repro-package - example', function (test) {
  test.equal(packageName, "add-assets-repro-package");
});
