import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensuring unique email for admins
    },
    password: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Admin", adminSchema);
