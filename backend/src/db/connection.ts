import mongoose from "mongoose";
import { Db_Name } from "../constant.js";


export const connectDb = async () =>{
    try{
        let connectionString = await mongoose.connect(`${process.env.CONNECTION_STRING}/${Db_Name}`);
        console.log(`MongoDB connected !! HOST is ${connectionString.connection.host}`);
    }catch(error){
        console.log('error while connecting db', error);
        process.exit(1);
    }
}