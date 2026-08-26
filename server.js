const express = require("express")
const sequelize = require("./src/config/database")

const app = express()

sequelize.sync()

PORT = 3000

app.listen(3000, () =>{
    console.log(`Server rodando na porta ${PORT}`)
})