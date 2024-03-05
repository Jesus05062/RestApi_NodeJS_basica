/* const express = require('express');
const router = express.Router();
 */
//OTRA MANERA DE EXPORTAR ROUTER
const { Router } = require( 'express' );
const router = Router(); 

//CONTROLADORES
//DESESTRUCTURACION
const { userGet, userPost, userDelete, userPatch, userPut } = require('../controllers/user');
//OTRA MANERA DE LLAMAR AL CONTROLADOR
const userController = require('../controllers/user');


router.get('/', userController.userGet );
router.put('/:id', userController.userPut );
router.post('/', userController.userPost );
router.delete('/', userController.userDelete);
router.patch('/', userController.userPatch);


module.exports = router;