import { Router } from "express";
import { verifyUser } from "../middlewares/authenticate.js";
import { content, updateContent, deleteContent, getContent, shareContent, fetchUrl } from "../controllers/content.controllers.js";

const router = Router();
router.use(verifyUser);

router.route('/add-content').post(content);
router.route('/update-content').put(updateContent);
router.route('/delete-content').delete(deleteContent);
router.route("/all-contents").get(getContent);
router.route("/:id/share").post(shareContent);
router.route('/shared/:id').get(fetchUrl);

export default router;