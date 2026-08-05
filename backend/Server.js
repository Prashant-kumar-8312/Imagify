import express from 'express';


import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";


import cors from "cors";



import connectDB from "./config/db.js";

import imageRoutes from "./routes/imageRoutes.js";



const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.use(cors({
//   origin: 'https://imagegenerateai.onrender.com', // your static site URL
//   credentials: true
// }));


// app.use(cors());

app.use(cors({ origin: 'https://imagegenerateai.onrender.com' }));


dotenv.config();

//console.log("open Ai");

connectDB();
 
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





app.use("/api/auth", authRoutes);
app.use("/api/generate", imageRoutes);




app.get('/', (req, res) => {
  res.send('Hello World!');
});


