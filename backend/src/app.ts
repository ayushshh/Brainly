import express from "express";
// import cors from "cors";
import cookieParser from 'cookie-parser';
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json({ limit: "16kb"}));
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

import contentRoutes from './routes/user.routes.js'
import userRoute from './routes/content.routes.js'

app.use('/api/v1/brainly/users', userRoute);
app.use('/api/v1/brainly/content', contentRoutes);

app.use(errorHandler);

export { app };