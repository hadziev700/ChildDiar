const Form = require('../models/Form.model')

 const controllers = {
  getForm: async (req,res) => {
    try {
      const form = await Form.find()
      res.json(form)
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      })
    }
  },

  getFormId: async (req,res) => {
    try {
      const formId = await Form.findById(req.params.id)
      res.json(formId)
    } catch (e) {
      return res.status(400).json( {
        error: e.toString(),
      })
    }
  },

  postFormId: async (req, res) => {
    try {
      const formPost = await Form.create({
        text:req.body.text,
        user: req.body.user,
        child: req.body.child,
        event: req.body.event
      });
      res.json(formPost);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  deleteForm: async (req,res) => {
    try {
      const formDelete = await Form.findByIdAndDelete(req.params.id)
      res.json('Форма удалена')
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  }
}

module.exports = controllers;