const url = require('url');  

const address = "http://127.0.0.1:5500/login.html";
const parseaddress = url.parse(address, true);  
console.log(parseaddress)

console.log(parseaddress.hostname);  
