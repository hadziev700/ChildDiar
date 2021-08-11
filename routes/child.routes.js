const { Router } = require ("express");
const {childController} = require ("../controllers/child.controllers");
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/child',childController.getAll);
router.get('/child',childController.getChildById);
router.post('/child',childController.createChild); //authMiddleware
router.patch('/child/:id',childController.editChild);
router.delete('/child/:id',childController.removeChild);

module.exports = router