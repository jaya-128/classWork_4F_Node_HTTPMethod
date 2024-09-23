const os = require('os');

console.log("Platform: ", os.platform());
console.log("Total memory: ", os.totalmem());
console.log("Free memory: ", os.freemem());

const cpus = os.cpus();
if (Array.isArray(cpus)) {
  console.log("Number of cores: ", cpus.length);
} else {
  console.log("Error: cpus() did not return an array");
}
