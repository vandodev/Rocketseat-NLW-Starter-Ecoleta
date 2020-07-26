const express = require("express")
const server = express()

server.use(express.static("public"))

//Templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express:server,
    noCache:true
})


//Ligar o servidor
server.listen(3000)

//Crindo rotas
server.get("/", (req, res) => {
   return res.render("index.html", {title: "Um titulo"})
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
   return res.render("search-results.html")
})

