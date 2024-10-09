/*import User from "../model/userModel.js"
// For posting data into database 
export const create = async(req, res)=>{
    try {
        const userData = new User( req.body);
        const {email} = userData;
        const userExist = await User.findOne({email})
        if (userExist){
            return res.status(400).json({message : "User already exist."})
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "})
    }
}

// For getting all users from database 
export const fetch = async (req, res)=>{
    try {
        const users = await User.find();
        if(users.length === 0 ){
            return res.status(404).json({message : "User not Found."})
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
// For updating data 
export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message : "User not found."})
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
// For deleting data from database 
export const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : " User Not Found. "})
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message : " User deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
    */
  /* 
   ==================================================================================================================================
   */

 /*  
import User from "../model/userModel.js";
import bcrypt from 'bcryptjs';  // For password encryption
import jwt from 'jsonwebtoken'; // For generating JWT tokens
import { body, validationResult } from 'express-validator';  // Input validation

// Register a new user (either regular user or admin)
export const register = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').isIn(['user', 'admin']).withMessage('Role must be either "user" or "admin"'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, password, role } = req.body;

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists." });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const user = new User({
                name,
                email,
                password: hashedPassword,
                role
            });

            const savedUser = await user.save();

            // Generate JWT token
            const token = jwt.sign({ id: savedUser._id, role: savedUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ message: "User registered successfully", token });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
];

// Login user
export const login = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { email, password } = req.body;

            // Find the user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            // Compare password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ message: "Login successful", token });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
];

// Fetch all users (only for admin)
export const fetchAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update user info
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
*/
/*
=========================================================================================================
*/
import User from "../model/userModel.js";

// For registering a new user
export const register = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists." });
        }
        const savedUser = await userData.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For getting all users from the database
export const fetchUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For updating user data
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "User not found." });
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// For deleting a user from the database
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "User not found." });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
