import asyncHandler from 'express-async-handler';
import { User } from '../models/users.models.js';
import bcrypt from "bcryptjs";
import { generateToken } from '../middlewares/generateToken.js';

const cookieOptions = {
  httpOnly: true,
  sameSite: "none" as const,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 30 * 24 * 60 * 60 * 1000
};

export const signup = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password){
        res.status(411);
        throw new Error("Error in inputs");
    }

    const userExist = await User.findOne({username});
    if(userExist){
        res.status(403);
        throw new Error("User already exist")
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password : hash
    })

    if(user){
        let token = generateToken(user._id.toString());

         res.status(201)
           .cookie('token', token, cookieOptions)
           .json({
               _id: user._id,
               username: user.username,
               message: "Registered successfully",
               token : token
           });
    }else{
        res.status(400).json({
            mssg : "Invalid data"
        })
    }
})

export const signin = asyncHandler( async (req, res) => {
    const { username, password} = req.body;
    if(!username || !password){
        res.status(411).json({
            mssg: "Please fill the information"
        });
        throw new Error("Please fill the information");
    }

    const findUser = await User.findOne({username})
    if(!findUser){
        res.status(400);
        throw new Error("User doesn't exist.")
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
        res.status(403);
        throw new Error("Wrong Password");
    }

    const Token = generateToken(findUser._id.toString());
    if(!Token){
        res.status(500);
        throw new Error("Internal server error")
    }else{
        res.status(201)
            .cookie("token", Token, cookieOptions)
            .json({
                mssg: "User Logged-in successfully"
            })
    }
})

export const logOut = asyncHandler(async (req, res) => {
    res.status(200)
    .clearCookie("token", cookieOptions)
    .json("log-out successfully")
})

// In Mongoose, .select() expects space‑separated fields, not comma‑separated.
export const getMe = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("username _id");
    res.status(200).json(user);
})
