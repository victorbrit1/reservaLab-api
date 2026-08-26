const Reserva = require("../models/reserva")

async function reservarLab(req, res) {
    try{

        const reserva = await Reserva.create(req.body)
    
        return res.status(201).json(reserva)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "erro na reserva"})
    }
}

async function listarReservas(req,res) {
    try{
        const reservas = await Reserva.findAll()

        return res.status(200).json(reservas)
    }catch(error){
        console.log(error)

        return res.status(500).json({error: "erro ao buscar reservas"})
    }  
}

module.exports = {
    listarReservas,
    reservarLab
}