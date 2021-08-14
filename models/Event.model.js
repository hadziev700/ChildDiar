const { Schema, model } =require("mongoose");

const eventSchema = new Schema(
  {
    date: {
      type: String,
      required: false,
    },
    text: {
      type: String,
    },
    child: {
      ref: "Child",
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);



const Event = model("Event", eventSchema );

module.exports = Event