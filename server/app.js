import express from "express";
import cors from "cors";
import connectDB from "./src/config/database.js";

import userRoutes from "./src/controllers/users.js";

const PORT = 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB().then(() => {
    console.log('DB connection successful.')

    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    })
}).catch((err) => {
    console.log('Error connecting DB', err);
})
