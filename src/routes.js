import express from 'express'
import { createUser, getAllUser, deleteUser } from './controller/userController.js'

const router = express.Router()

router.post('/cadastro',  createUser)
router.get('/todos',  getAllUser)
router.delete('/deletar',  deleteUser)


export default router