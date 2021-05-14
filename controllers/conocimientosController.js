const { response } = require("express");
const  Conocimiento  = require("../models/conocimientosModel");



const obtenerConocimientos = async (req, res = response) => {
    try {
        const listaConocimientos = await Conocimiento.find();

        res.status(200).json({
            listaConocimientos
        })
    } catch (error) {
        console.log(error);
    }
}

const subirConocimiento = async (req, res = response) => {

    try {

        const body = {
            nombre: 'Conocimiento Prueba',
            color: 'green',
            porcentaje: '80%'

        }

        const newConocimiento = new Conocimiento( body )

        await newConocimiento.save();

        res.status(200).json({
            newConocimiento
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    obtenerConocimientos,
    subirConocimiento
}