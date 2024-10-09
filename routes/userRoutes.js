import express from "express";
import { register, fetchUsers, updateUser, deleteUser } from "../controller/userController.js";

const route = express.Router();

// User Routes
route.post("/register", register);
route.get("/getallusers", fetchUsers);
route.put("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser);

export default route;
