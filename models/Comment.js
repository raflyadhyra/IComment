import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    commentId: {
      type: Number,
      required: true,
    },
    commentContent: {
      type: String,
    },
    replies: {
      type: Array,
    },
    createdAt: {
      type: Number,
    },
    updatedAt: {
      type: Number,
    },
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

export default mongoose.model("Comment", Schema);
