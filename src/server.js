const express = require("express")
const server = express()

server.use(express.static("public"))

//Ligar o servidor
server.listen(3000)

//Crindo rotas
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})
search-results