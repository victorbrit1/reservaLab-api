'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Reservas", {
      id:{
        type:Sequelize.INTEGER,
        autoincrement:true,
        primarykey:true
      },
      nome:{
        type:Sequelize.STRING,
        allowNull:false
      },
      data:{
        type:Sequelize.DATE,
        allowNull:false
      },
      horario_ent:{
        type:Sequelize.REAL,
        allowNull:false
      },
      horario_saida:{
        type:Sequelize.REAL,
        allowNull:false
      },
      lab:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      motivo:{
        type:Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
    },

    updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Reservas")
  }
};
