import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  { 
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    commentText: {
      type: String,
      required: true,
    },
    
    commentOwnerData: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("Comments", CommentSchema);
export default CommentModel;
