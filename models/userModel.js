import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isPsychiatrist: {
      type: String,
      default: "no",
    },
    activeStatus: {
      type: String,
    },
   profilePicture: String,
    coverPicture: String,
    about: String,
    yearOfStudy: String,
    worksAt: String,
    faculty: String,
    department: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
