const { eventController } = require("../controllers/event.controllers");
const { Router } = require("express");
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get("/events",eventController.getAll);
router.get('/events/:id',eventController.getEventById)
router.post("/event/:id",authMiddleware,eventController.createEvent);
router.delete('/events/:id',eventController.removeEvent)
router.patch('/events/:id',eventController.editEvent)


module.exports = router;