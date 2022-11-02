import { model, Schema, Types } from "mongoose";

const schema = new Schema({
  banner: {type: String},
  title: {type: String, required: true}, 
  text: {type: String, required: true}, 
  date: {type: Date, default: Date.now},
  likes: {type: Number, default: 0},
  tag: {type: String, default: "", required: false},
  owner: {type: Types.ObjectId, ref: "User"}
});

module.exports = model("Post", schema);