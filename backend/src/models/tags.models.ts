import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
});

export const Tag = mongoose.model('Tag', tagSchema);