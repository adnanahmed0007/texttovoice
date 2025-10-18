import express from "express";
import mongoose from "mongoose";
const Signupdetail = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email:
    {
        type: String,
        required: [true, "email is required"]
    },
    password:
    {
        type: String,
        required: [true, "password is required"],

    },
    phone: {
        type: String,
        required: [true, "phone number is required"]
    }
}, { timestamps: true });
const Signupmodel = mongoose.model("signupuser", Signupdetail);
export default Signupmodel;