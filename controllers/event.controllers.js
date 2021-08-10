const Event = require('../models/Event.model');
const Child =require('../models/Child.model')
module.exports.eventController = {
  getAll: async (req, res) => {
    try {
      const event = await Event.find()

      return res.json(event);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getEventById: async (req, res) => {
    const { id } = req.param;

    try {
      const event = await Event.findById(id);

      if (!event) {
        return res.status(404).json({
          error: 'Событие с таким ID не найдено',
        });
      }

      return res.json(event);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  createEvent: async (req, res) => {
    try {
      const event = await Event.create({
        date:req.body.date,
        text: req.body.text,
        child:req.body.child
      });
      //await product.save();
      res.json(event);
    } catch (e) {
      console.log(e.message);
    }
  },
  removeEvent: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Event.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: 'Не удалось удалить событие. Укажите верный ID',
        });
      }

      return res.json({
        message: 'Событие успешно удалено',
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editEvent: async (req, res) => {
    const { date,text,child, } = req.body;
    const { id } = req.params;

    if (!date,text,child) {
      return res.status(400).json({
        error: 'Необходимо указать новое название cобытии',
      });
    }

    try {
      const edited = await Event.findByIdAndUpdate(
        id,
        { date,text,child, },
        { new: true }
      );

      if (!edited) {
        return res.status(400).json({
          error: 'Не удалось изменить название. Проверь правильность ID',
        });
      }

      return res.json(edited);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
