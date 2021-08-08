const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();


router.get("/", usersController.getUsers);
router.get("/current", authMiddleware, usersController.getUsersById);
router.post('/', usersController.registerUser)
router.post('/login', usersController.login)

module.exports = router;