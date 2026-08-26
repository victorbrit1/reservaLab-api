const express = require("express")
const router = express.Router()
const controller = require("../controller/reservaController")

router.post("/reserva", controller.reservarLab)
router.get("/reserva", controller.listarReservas)
router.get("/reserva/:id", controller.buscarReserva)
router.delete("/reserva/:id", controller.deletarReserva)
router.put("/reserva/:id", controller.atualizarReserva)

module.exports = router