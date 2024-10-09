/*import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"

const app = express();
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL; 

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected Successfully.")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : ${PORT}`)
    })
}).catch(error => console.log(error));

app.use("/api/user", route)
*/
/*
========================================================================================================================
*/

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON request bodies

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000; // Use the configured port
const MONGOURL = process.env.MONGO_URL; // Use the MongoDB URL

// MongoDB connection
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected Successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch(error => console.log(error));

// Mount the user routes
app.use("/api/user", userRoutes);

// Mount the assignment routes
app.use("/api/assignment", assignmentRoutes);

