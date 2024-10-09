import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensuring unique email
    },
    address: {
        type: String,
        required: true,
    }
});

export default mongoose.model("User", userSchema);
