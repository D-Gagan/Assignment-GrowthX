import Assignment from "../model/assignmentModel.js";

// For uploading a new assignment
export const uploadAssignment = async (req, res) => {
    try {
        const assignmentData = new Assignment(req.body);
        const savedAssignment = await assignmentData.save();
        res.status(201).json(savedAssignment);
    } catch (error) {
        console.error(error)//this is the added assignment correction line
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For getting assignments tagged to the admin
export const fetchAssignments = async (req, res) => {
    try {
        const adminId = req.params.adminId; // Assuming adminId is passed in params
        const assignments = await Assignment.find({ admin: adminId });
        if (assignments.length === 0) {
            return res.status(404).json({ message: "No assignments found." });
        }
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For accepting an assignment
export const acceptAssignment = async (req, res) => {
    try {
        const id = req.params.id;
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found." });
        }
        assignment.status = "Accepted"; // Example status update
        const updatedAssignment = await assignment.save();
        res.status(200).json(updatedAssignment);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For rejecting an assignment
export const rejectAssignment = async (req, res) => {
    try {
        const id = req.params.id;
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found." });
        }
        assignment.status = "Rejected"; // Example status update
        const updatedAssignment = await assignment.save();
        res.status(200).json(updatedAssignment);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
