const express = require("express")
const sequelize = require("./src/config/database")
const router = require("./src/routes/reservaRoutes")

const app = express()

app.use(express.json())
app.use(router)

sequelize.sync()

PORT = 3000

app.listen(3000, () =>{
    console.log(`Server rodando na porta ${PORT}`)
})