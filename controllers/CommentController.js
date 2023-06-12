import commentModel from "../models/commentModel.js";
import UserModel from "../models/userModel.js";
import mongoose from "mongoose";

// creating a comment

export const createComment = async (req, res) => {
  
    const postId = req.params.postId;
    const { userId } = req.body;
    const newComment = new commentModel(req.body);
    try {
      const userData = await UserModel.findById(userId);
      const { password, ...otherDetails } = userData._doc;
      newComment.commentOwnerData.push(otherDetails);
      newComment.postId = postId;
      await newComment.save();
      res.status(200).json(newComment);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// update comment
export const updateComment = async (req, res) => {
    const commentId = req.params.comId;
    const { userId } = req.body;
  
    try {
      const comment = await commentModel.findById(commentId);
      if (comment.userId === userId) {
        await comment.updateOne({ $set: req.body });
        const updatedComment = await commentModel.findById(commentId);
        res.status(200).json(updatedComment);
      } else {
        res.status(403).json("Authentication failed");
      }
    } catch (error) {}
  };

// delete a comment
export const deleteComment = async (req, res) => {
    const id = req.params.comId;
    const { userId } = req.params;
    try {
      const comment = await commentModel.findById(id);
      if (comment.userId === userId) {
        await comment.deleteOne();
        res.status(200).json(comment);
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };


// Get all comments
export const getAllComments = async (req, res) => {
    try {
      const allComments = await commentModel.find().sort({_id:-1});
      res.status(200).json(
        allComments.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };
