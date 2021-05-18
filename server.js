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

server.get("/content/:id", function(req, res) {
    const id = req.params.id;
    const curso = cursos.find(function(curso){
        return curso.id == id
    })

    if (!curso)
        return res.send("Curse not found!")

    return res.render("courses", {curso})
})

server.listen(5000, function(){
    console.log("server is running")
})