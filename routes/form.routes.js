const { Router } = require('express')
const formController = require ('../controllers/form.controllers')
const router = Router()


router.get('/form',formController.getForm)
router.get('/form/:id',formController.getFormId)
router.post('/form',formController.postFormId)
router.delete('/form/:id',formController.deleteForm)

module.exports = router