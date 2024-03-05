
//Javascript no reconoce en response en la funcion,
//entonces desestructuramos Response de express
const { response, request } = require('express');
//NOTA: las peticiones si funcionan sin la linea de arriba, pero sin esa linea 
//las propiedades del response no se logran visualizar a la hora del tipado de codigo

const userGet = ( req = request, res = response) => {

    //parametros que van en el path de la petición
    //http://localhost:8080/api/user?q=hola&nombre=jesus&apikey=1234567890
    const { q, nombre = 'No name', apikey, page=1, limit } = req.query;

    res.json({
        msg: 'getAPI - CONTROLADOR',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

function userPost(req = request, res = response) {

    /* const nombre = req.body.nombre;
    const edad = req.body.edad; */

    const { nombre, edad } = req.body;

    res.json({
        msg: 'postAPI - CONTROLADOR',
        nombre,
        edad
    });
}

const userPut = ( req = request, res = response ) => {

    const id = req.params.id;

    res.json({
        msg: `putAPI - CONTROLADOR, actualizado el id: ${ id }`, 
        user_id: id
    });
}

function userDelete( req = request, res = response ){
    res.json({
        msg: 'deleteAPI - CONTROLADOR'
    });
}


const userPatch = ( req = request, res = response ) => {
    res.json({
        msg: 'patchAPI - CONTROLADOR'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}