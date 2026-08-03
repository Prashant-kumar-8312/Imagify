import axios from "axios";

export async function generateImageFromWorker({
  prompt,
  aspect,
  style,
}) {
  try {
    const response = await axios.post(
      process.env.WORKER_URL,
      {
        prompt,
        aspect,
        style,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WORKER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    
    return Buffer.from(response.data.image, "base64");
  } catch (err) {
  
    throw err;
  }
}