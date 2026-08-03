import { generateImageFromWorker } from "../services/cloudflareService.js";
import User from "../models/User.js";

export async function generateImage(req, res) {
  
    try {

     
       
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (user.framesRemaining <= 0) {
            return res.status(400).json({
                success: false,
                message: "No credits left",
            });
        }

        const { prompt, aspect, style } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required",
            });
        }

        const imageBuffer = await generateImageFromWorker({
            prompt,
            aspect,
            style,
        });

        // Deduct one credit
        user.framesRemaining -= 1;
        await user.save();

        res.setHeader("Content-Type", "image/png");
        res.send(imageBuffer);

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Image generation failed",
        });
    }
}

export async function getTotalCredit(req, res) {
      try {
        const user = await User.findById(req.user.id);
       
        res.json({
            success: true,
            framesRemaining : user.framesRemaining,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }

}