import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import Admin from "../model/adminModel.js"; 
import Assignment from "../model/assignmentModel.js";



// For registering a new admin
export const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if admin already exists
        const adminExist = await Admin.findOne({ email });
        if (adminExist) {
            return res.status(400).json({ message: "Admin already exists." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new admin
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword // Store the hashed password
        });

        // Save the admin to the database
        const savedAdmin = await newAdmin.save();

        // Create a token using the saved admin's ID
        const token = jwt.sign({ id: savedAdmin._id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        // Send back the token and the saved admin data (optional)
        res.status(201).json({ token, admin: savedAdmin }); // Send back the created admin data if needed
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For logging in an admin
export const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await User.findOne({ email });
        if (!admin || admin.role !== "admin") {
            return res.status(404).json({ message: "Admin not found." });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials." });
        }

        const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};


// Fetch assignments
export const fetchAssignments = async (req, res) => {
    try {
        const adminId = req.admin.id; // Assuming admin ID is stored in req.admin
        const assignments = await Assignment.find({ admin: adminId });
        if (assignments.length === 0) {
            return res.status(404).json({ message: "No assignments found." });
        }
        res.status(200).json(assignments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error." });
    }
};


// Accept Assignment
export const acceptAssignment = async (req, res) => {
    try {
        const id = req.params.id;
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found." });
        }
        assignment.status = "Accepted"; // Update status
        const updatedAssignment = await assignment.save();
        res.status(200).json(updatedAssignment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error." });
    }
};


// Reject Assignment
export const rejectAssignment = async (req, res) => {
    try {
        const id = req.params.id;
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found." });
        }
        assignment.status = "Rejected"; // Update status
        const updatedAssignment = await assignment.save();
        res.status(200).json(updatedAssignment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error." });
    }
};

