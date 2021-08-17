const { Router } = require ("express");
const {childController} = require ("../controllers/child.controllers");
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/child',authMiddleware,childController.getAll);
router.get('/child/:id',childController.getChildById);
router.get("/admin/", authMiddleware, childController.getUserChild);
router.post('/child', authMiddleware, childController.createChild); //authMiddleware
router.patch('/child/:id',childController.editChild);
router.delete('/child/:id',childController.removeChild);

module.exports = router