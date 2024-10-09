import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    admin: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("assignments", assignmentSchema);
