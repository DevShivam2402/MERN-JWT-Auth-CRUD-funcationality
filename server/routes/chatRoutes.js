import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import 

const router = express.Router();

// Chat API's

router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChats);
// router.route("/group").post(protect, createGroupChat);
// router.route("/renamegroup").put(protect, renameGroup);
// router.route("/removefromgroup").put(protect, removeFromGroup);
// router.route("/addingroup").put(protect, addToGroup);


export default router;
