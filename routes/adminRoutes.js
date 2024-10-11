import express from "express";
import { registerAdmin, adminLogin, fetchAssignments, acceptAssignment, rejectAssignment } from "../controller/adminController.js";
import { auth } from "../middleware/authMiddleware.js";

const route = express.Router();

// Admin Routes
route.post("/register", registerAdmin);
route.post("/login", adminLogin);
route.get("/assignments", auth, fetchAssignments); // Protected route
route.post("/assignments/:id/accept", auth, acceptAssignment);
route.post("/assignments/:id/reject", auth, rejectAssignment);

export default route;
