import jwt from 'jsonwebtoken';
import asyncHandler from "express-async-handler";
import { User } from '../models/users.models.js';

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const verifyUser = asyncHandler(async (req, res, next) => {
    let token : string | undefined;

    if(req.cookies.token){
        token = req.cookies.token;
    }else if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if(token){
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
            req.user = await User.findById(decode.id).select("-password");
            if(!req.user){
                res.status(401);
                throw new Error('User not found');
            }
            next();
        }catch(error){
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
})