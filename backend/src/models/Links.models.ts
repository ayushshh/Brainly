import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
});

export const Link = mongoose.model('Link', linkSchema);