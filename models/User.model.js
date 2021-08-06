const { Schema, model } = require("mongoose");


const userSchema = new Schema (
  {
    name: {
      type : String,
      required: true
    },
    login:{
      type: String,
      required: true,
      unique: false,
    },
    password:{
      type: String,
      required: true
    },
    // pathToImage: {
    //   type: String,
    // }
   },
)
const User = model("User", userSchema);

module.exports = User;