import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    prompt: {
      type: String,
      required: true,
      trim: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    style: {
      type: String,
      default: "Realistic",
    },

    size: {
      type: String,
      default: "1024x1024",
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Images = mongoose.model("Image", imageSchema);

export default Images;