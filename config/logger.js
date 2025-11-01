// lightweight logger, can be extended to winston
const log = (...args) => console.log(new Date().toISOString(), ...args);
module.exports = { log };
