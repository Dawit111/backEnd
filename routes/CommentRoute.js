import express from "express";
import {
  createComment, updateComment, deleteComment, getAllComments
} from "../controllers/CommentController.js";
const router = express.Router();

//answer routes
router.post("/:postId/create", createComment);
router.put("/:comId/update", updateComment);
router.delete("/:comId/:userId/delete", deleteComment);
router.get("/getAll", getAllComments);

export default router;
