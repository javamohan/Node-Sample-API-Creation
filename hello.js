const http = require('http')
const path = require('path')
const filepath = path.join(__dirname, 'WeatherModal.js');
console.log(`filepath: ${filepath}`)
http.createServer(function(req, res){
res.write("Welcome to Node JS example added  ...!!!")

res.end()
}).listen(9000)

