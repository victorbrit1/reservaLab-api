const {DataTypes} = require("sequelize")
const sequelize = require("../config/database")

const Reserva = sequelize.define("Reserva", {
    id:{
        type:DataTypes.INTEGER,
        autoincrement:true,
        primarykey:true
      },
      nome:{
        type:DataTypes.STRING,
        allowNull:false
      },
      data:{
        type:DataTypes.DATE,
        allowNull:false
      },
      horario_ent:{
        type:DataTypes.TIME,
        allowNull:false
      },
      horario_saida:{
        type:DataTypes.TIME,
        allowNull:false
      },
      lab:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      motivo:{
        type:DataTypes.STRING,
        allowNull:false
      },
})

module.exports = Reserva