import express  from "express";
const router = express.Router();
import { 
    authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile, 
    deleteUser
}  from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// User authentication API's
router.post('/auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.route('/delete').delete(protect, deleteUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);











export default router;