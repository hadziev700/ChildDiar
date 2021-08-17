const { Schema, model } = require('mongoose')


const childSchema = new Schema (
  {
    imageURL: {
      type: String,
      required:false
    },
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true
    }
  },
       { timestamps: true }
);

const Child = model("Child", childSchema );

module.exports = Child;