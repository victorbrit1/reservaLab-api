const express = require("express")
const sequelize = require("./src/config/database")
const router = require("./src/routes/reservaRoutes")

const app = express()

app.use(router)
app.use(express.json())

sequelize.sync()

PORT = 3000

app.listen(3000, () =>{
    console.log(`Server rodando na porta ${PORT}`)
})