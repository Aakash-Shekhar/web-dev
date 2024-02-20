// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");

const sayHi = require("./5-utils");

const data = require("./6-alternative-export");

// console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

require("./7-mind-grenade"); //when it is imported, the node wraps it in a function and runs it on it's own

// Built-in Modules

// OS - Operating System
// PATH
// FS - File System
// HTTP
