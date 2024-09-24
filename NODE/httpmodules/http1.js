const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<center>Welcome to Node HTTP module</center>")
   
    res.end()
})

server.listen(9000, ()=>{
    console.log("Server is running @ http://localhost:9000")
})