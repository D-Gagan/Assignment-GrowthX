import express from "express";
import { uploadAssignment, fetchAssignments, acceptAssignment, rejectAssignment } from "../controller/assignmentController.js";

const route = express.Router();

// Assignment Routes
route.post("/upload", uploadAssignment);
route.get("/assignments/:adminId", fetchAssignments);
route.post("/assignments/:id/accept", acceptAssignment);
route.post("/assignments/:id/reject", rejectAssignment);

export default route;
