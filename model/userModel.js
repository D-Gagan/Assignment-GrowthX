import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { // This field is necessary to store hashed passwords
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

export default mongoose.model("User", userSchema);
