import express from "express";
import { register, login } from "../controller/userController.js";
const route = express.Router();

// User Routes
route.post("/register", register);
route.post("/login", login);

export default route;
