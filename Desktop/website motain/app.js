const express = require('express');
const http  = require('http')
const fs = require('fs')
const port = 1234

const server  =  http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html', function (error , data){
        if(error){
            res.writeHead(404)
            res.write('error:File not found')
        }else{
            res.write(data)
        }
        res.end()
    })
    res.write('Buna Ziua ')
    

})

server.listen(port, function(error){
    if(error){
        console.log('somerhing went wrong ',error)
    }else{
        console.log('Server is listening on port' + port)
    }
})
// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))