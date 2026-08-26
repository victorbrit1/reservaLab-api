const {Sequelize} = require("sequelize")

const dotenv = require("dotenv")

dotenv.config()

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"mysql",
        logging:false
    }
)

try{
    sequelize.authenticate()
    console.log("Conectado ao banco!")
}catch(error){
    console.log("erro ao conectar ao banco", error)
}

module.exports = sequelize