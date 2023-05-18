// You shorld salready know:
// HTML, CSS, and JavaScript
// Possibly experience with other libraries and frameworks

// How NodeJS differs from Vanilla JS
// 1) Node runs on a server 0 not in a browser (backend not forntend)
// 2) The console is the terminal windows
console.log('Hello World!')
// 3) globa object instead of window object
console.log(global)
// 4) Has Common Core modules that we will explore
// 5) CommonJS module instead of ES6 modules

const os = require('os')
const path = require('path')

const math = require('./math')
console.log(math.add(2, 3))
console.log(math.subtract(2, 3))
console.log(math.multiply(2, 3))
console.log(math.divide(2, 3))

const { add, subtract, multiply, divide} = require('./math')
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

/* Hello World!
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 50.70390000194311,
      nodeStart: 2.975500002503395,
      v8Start: 7.649000000208616,
      bootstrapComplete: 34.14939999952912,
      environment: 18.073899999260902,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1684431708683.926
  },
  fetch: [AsyncFunction: fetch]
}
Windows_NT
Windows 10 Home Single Language
C:\Users\gusta
C:\Users\gusta\Documents\Developer\GitHub\node-sutdy\node_tutorials\node_series\01tut
C:\Users\gusta\Documents\Developer\GitHub\node-sutdy\node_tutorials\node_series\01tut\server.js
C:\Users\gusta\Documents\Developer\GitHub\node-sutdy\node_tutorials\node_series\01tut
server.js
.js
{
  root: 'C:\\',
  dir: 'C:\\Users\\gusta\\Documents\\Developer\\GitHub\\node-sutdy\\node_tutorials\\node_series\\01tut',
  base: 'server.js',
  ext: '.js',
  name: 'server'
} */