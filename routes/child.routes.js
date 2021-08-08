const { Router } = require ("express");
const {childController} = require ("../controllers/child.controllers");

const router = Router();

router.get('/child',childController.getAll);
router.get('/child/:id',childController.getChildById);
router.post('/child',childController.createChild);
router.patch('/child/:id',childController.editChild);
router.delete('/child/:id',childController.removeChild);

module.exports = router