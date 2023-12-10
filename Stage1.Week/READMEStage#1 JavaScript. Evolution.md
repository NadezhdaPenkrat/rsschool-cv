# [Stage#1](../../) JavaScript. Evolution

## Module Overview

In the "JavaScript. Evolution" module, students will dive into the modern features and improvements brought by ES2015 (also known as ES6) and how it has transformed JavaScript development. The module emphasizes practical skills in using advanced ES2015 features like array and object destructuring, spread operators, as well as understanding complex types such as Maps, Sets, and Symbols. Additionally, it covers the fundamentals of npm (Node Package Manager) and package.json, providing students with the essential tools for managing JavaScript projects and dependencies.

## In this module, students need to learn about:

- ES2015
  - Arrays
    - [Using the array spread operator](https://javascript.info/rest-parameters-spread)
    - [Destructuring arrays](https://javascript.info/destructuring-assignment#array-destructuring)
    - [Searching arrays with the .includes function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  - Objects
    - [Creating objects with the spread operator](https://www.javascripttutorial.net/es-next/javascript-object-spread/)
    - [Destructuring objects](https://javascript.info/destructuring-assignment#object-destructuring)
  - Complex Types of ES2015
    - [Maps](https://javascript.info/map-set#map)
    - [Sets](https://javascript.info/map-set#set)
    - [Symbols](https://javascript.info/symbol)
- NPM & package.json
  - [What are packages and npm?](https://docs.npmjs.com/about-npm)
  - Getting Started with npm
    - [Initializing a package.json file](https://heynode.com/tutorial/create-packagejson-file/)
    - [Adding node packages](https://docs.npmjs.com/downloading-and-installing-packages-locally)
    - [Managing global directory](https://medium.com/@alberto.schiabel/npm-tricks-part-1-get-list-of-globally-installed-packages-39a240347ef0)
    - [Updating a package](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)
    - [Removing a package](https://docs.npmjs.com/uninstalling-packages-and-dependencies)
    - [Semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
    - [Introduction to package-lock.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json)
  - Advanced Subjects
    - [Scripting in package.json](https://docs.npmjs.com/cli/v8/using-npm/scripts)

## Approximate time to complete this module:

3h

## Practice

1.  You need to take the "[St1] JS Evolution" test in the RS APP > Auto Test

## Additional sources

- [ES6 for Humans](https://github.com/metagrover/ES6-for-humans) - 1h
- [Spread operator and rest parameters](https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281) - 4 min read
- [Destructuring arrays](https://medium.com/swlh/array-destructuring-in-javascript-141196434d65) - 3 min read
- [ [RU] EcmaScript - Complete course (ES6, ES7, ES8)](https://www.youtube.com/watch?v=Ti2Q4sQkNdU) - 2,5h
- [The State Of JavaScript](https://stateofjs.com/)
- [You Don't Know JS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)



List installed packages
npm list
This shows us probably too much because we see the dependencies of our dependencies…
Use the --depth to limit the depth of your search
npm list --depth=0
As you can see the output when you limit the depth:

https://bobbyhadz.com/blog/javascript-convert-object-to-map

Map is a collection of key/value pairs.
Map keys and values can be of any type
(arrays, objects, numbers, and other primitive data types).
Map iterates its elements in insertion order. 
Before the introduction of map, you would have to use an object
   
Your package. json holds important information about the project. 
It contains human-readable metadata about 
the project (like the project name and description)
as well as functional metadata like the package
version number and a list of dependencies required by the application.

To create a default package.json using information 
extracted from the current directory, 
use the npm init command with the --yes or -y flag. 
For a list of default values, see "Default values extracted from the current directory". 
On the command line, navigate to the root directory of your package.

Minor Version A minor version change indicates 
that there are new features added to the package 
but still maintains backward compatibility. 
This means that if you update to a new minor version, 
your code should still work with the new version of the package.26 апр. 2023 г.

Code status        	Stage	          Rule	            Example version
First release	      New product	    Start with 1.0.0	1.0.0
Backward compatible 
bug fixes	          Patch release	  Increment the 
                                      third digit	   1.0.1
Backward compatible 
new features	     Minor release	  Increment the middle
                                    digit and reset
                                     last digit
                                          to zero	   1.1.0
Changes that break 
backward
 compatibility       	Major release	
                                    Increment the 
                                    first digit and
                                     reset middle
                                      and last digits
                                       to zero	
                                                     2.0.0

https://robotdreams.cc/blog/271-chto-takoe-npm-i-zachem-on-nuzhen

npm stands for Node Package Manager. 
It's a library and registry for JavaScript software packages. 
npm also has command-line tools to help you 
install the different packages and manage their dependencies.
 npm is free and relied on by over 11 million developers worldwide.

 npm consists of three distinct components:
  the website.
   the Command Line Interface (CLI) 
   the registry.

Package JSON scripts consist of predefined commands
that can be executed via the command line using 
the Node Package Manager (npm). 
These npm scripts are defined in the package. 
json file, which is the configuration 
file for node package json projects.