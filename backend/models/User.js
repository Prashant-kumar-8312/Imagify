import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    
     password: {
    type: String,
    required: true,
  },

    // How many frames the user has left this month (matches the
    // "monthly roll" concept referenced in the frontend copy)
    framesRemaining: {
      type: Number,
      default: 30,
    },
    rollResetsAt: {
      type: Date,
      default: () => {
        const d = new Date();
        d.setMonth(d.getMonth() + 1);
        return d;
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
