import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDb } from "./db/connection.js";

dotenv.config({
    path: "./.env"
});

connectDb()
.then(() =>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
})