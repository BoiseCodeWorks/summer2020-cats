import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cat = new Schema(
    {
        name: { type: String, required: true },
        lives: { type: Number, default: 9 },
        breed: { type: String },
        isEvil: { type: Boolean, default: true },
        moods: [{ type: String }]
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Cat;
