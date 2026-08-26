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

async function buscarReserva(req,res,params) {
    try{
        const reservaID = Number(req.params.id)
        
        const reserva = await Reserva.findByPk(reservaID)

        if(!reserva){
            return res.status(404).json({message:"reserva não encontrada"})
        }

        return res.status(200).json(reserva)
    }catch(error){
        console.log(error)

        return res.status(500).json({error: "Erro ao buscar a reserva"})
    }
        
}
async function deletarReserva(req,res,params) {
    try{
        const reservaID = Number(req.params.id)
        
        const reserva = await Reserva.findByPk(reservaID)

        if(!reserva){
            return res.status(404).json({message:"reserva não encontrada"})
        }

        await reserva.destroy()

        return res.status(204).send()
    }catch(error){
        console.log(error)

        return res.status(500).json({error: "Erro ao buscar a reserva"})
    }
        
}

module.exports = {
    listarReservas,
    reservarLab,
    deletarReserva,
    buscarReserva
}