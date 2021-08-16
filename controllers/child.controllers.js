const Child = require("../models/Child.model");
const User = require("../models/User.model");

module.exports.childController = {
  getAll: async (req, res) => {
    try {
      const child = await Child.find({
        user: req.user.id
      }).populate("user")

      return res.json(child);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  getChildById: async (req, res) => {
    try {
      const childId = await Child.findById(req.params.id);
      res.json(childId);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  createChild: async (req, res) => {
    try {
      const childPost = await Child.create({
        imageURL: req.body.imageURL,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        //user: req.user

      });
      res.json(childPost);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeChild: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Child.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить ребенка. Укажите верный ID",
        });
      }

      return res.json({
        message: "Ребенок успешно удален",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editChild: async (req, res) => {
    const child = await Child.findOneAndUpdate(req.params.id, {
      $set: {
        ...req.body,
      },
    });
    child.save();

    res.json("Изменения внесены");
  },

};
