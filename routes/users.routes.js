const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get("/users", usersController.getUsers);
router.get("/user", usersController.getUsersById);
router.post('/register', usersController.registerUser)
router.post('/login', usersController.login)

module.exports = router;