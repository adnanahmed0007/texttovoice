import express from "express";
import mongoose from "mongoose";
const userquestion = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signupuser',
    },
    UseraskedQuestion:
    {
        type: String,
        required: [true, "User question is required"]
    }
}, { timestamps: true });
const Userdatamodel = mongoose.model("userquestion", userquestion);
export default Userdatamodel;