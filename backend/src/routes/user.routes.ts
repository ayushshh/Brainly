import { Router } from "express";
import { verifyUser } from "../middlewares/authenticate.js";
import { signin, signup, logOut, getMe } from "../controllers/user.controllers.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/me").get(verifyUser, getMe);
router.route("/logout").post(verifyUser, logOut);

export default router;