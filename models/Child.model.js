const { Schema, model } = require('mongoose')


const childSchema = new Schema (
  {
    imageURL: {
      type: String,
      required:true
    },
    name: {
      type: String,
    },
    age: {
      type: String,
  },
    gender: {
      type: String,
    },
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
    }
  },
       { timestamps: true }
);

const Child = model("Child", childSchema );

module.exports = Child;