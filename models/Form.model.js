const  { Schema, model} = require("mongoose")

const formSchema = new Schema (
  {
    text: {
      type: String,
      required: false,
    },
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    child: {
      ref: "Child",
      type: Schema.Types.ObjectId,
    },
    event: {
      ref: "Event",
      type: Schema.Types.ObjectId,
    }
  },
  { timestamps: true }
)

const Form = model("Form",formSchema ) ;

module.exports = Form;