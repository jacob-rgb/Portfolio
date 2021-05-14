const { response } = require("express");
const proyectoModel = require("../models/proyectoModel");

const obtenerProyectos = async (req, res = response) => {
    try {

        const proyectosLista = await proyectoModel.find();
        if(!proyectosLista) res.status(400).json({msg: 'No se han encontrado proyetos'})

        res.status(200).json({
            proyectosLista
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    obtenerProyectos
}