import asyncHandler from "express-async-handler";
import { Content } from "../models/content.models.js";
import { Link } from "../models/Links.models.js";
import { Tag } from "../models/tags.models.js";

// Create content
export const content = asyncHandler(async (req, res) => {
  const { link, type, title, tags } = req.body;

  if (!link || !type || !title || !tags) {
    res.status(411);
    throw new Error("Error in inputs");
  }

  const addLink = await Link.create({ hash: link });
  const addTags = await Tag.create({ title: tags });

  const addContent = await Content.create({
    link: addLink._id,
    type,
    title,
    tags: [addTags._id],
    userId: req.user._id,
  });

  const populateData = await Content.findById(addContent._id)
    .populate("userId", "username")
    .populate("link", "hash")
    .populate("tags", "title");

  res.status(201).json(populateData);
});

// Update content
export const updateContent = asyncHandler(async (req, res) => {
  const update = await Content.findById(req.params.id);

  if (!update) {
    res.status(400);
    throw new Error("There is no content");
  }

  if (update.userId.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized to update this content");
  }

  const contentUpdate = await Content.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(contentUpdate);
});

// Delete content
export const deleteContent = asyncHandler(async (req, res) => {
  const deleteId = await Content.findById(req.params.id);

  if (!deleteId) {
    res.status(400);
    throw new Error("There is no content with this id");
  }

  if (deleteId.userId.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized to delete this content");
  }

  await deleteId.deleteOne();

  res.status(200).json({ message: "Content deleted successfully!" });
});

// Get all content for a user
export const getContent = asyncHandler(async (req, res) => {
  const contents = await Content.find({ userId: req.user._id })
    .populate("userId", "username")
    .populate("link", "hash")
    .populate("tags", "title");

  if (!contents || contents.length === 0) {
    res.status(404);
    throw new Error("User content doesn't exist");
  }

  res.status(200).json(contents);
});

export const shareContent = asyncHandler(async (req, res) => {
  const content = await Content.findById(req.params.id);

  if (!content) {
    res.status(400);
    throw new Error("Invalid content ID");
  }

  // Ensure the logged-in user owns this content
  if (content.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Unauthorized access");
  }

  // Create sharable link
  // const createLink = `${process.env.BASE_URL}/api/v1/content/shared/${content._id}`;
  const createLink = `shbgskwubkf/content-link/${content._id}`;

  // Update content with share link
  const sharedContent = await Content.findByIdAndUpdate(
    req.params.id,
    { share: createLink },
    { new: true }
  );

  if (sharedContent) {
    res.status(200).json({ link: createLink });
  } else {
    res.status(500);
    throw new Error("Server error while creating link");
  }
});

export const fetchUrl = asyncHandler(async (req, res) => {
  const content = await Content.findById(req.params.id)
      .select("type title")
      .populate("link", "hash")
      .populate("tags", "title");

  if(!content){
    res.status(404)
    throw new Error("Content Id Invalid");
  }

  res.status(200).json(content);
});