const express = require('express')
const nunjucks = require('nunjucks')
const cursos = require('./data');

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/content", function(req, res){
    const content = {
        description: "Conteúdo"
    }

    return res.render("content", { cursos, content })
})

server.listen(5000, function(){
    console.log("server is running")
})