import  asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';


//@desc  Auth user/set token
//route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
   
    const {email, password} =req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid Email and Password');
    }


});



// #TODO: @desc  Register a new user
//route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name, email, password
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }
    
    // res.status(200).json({ message: 'Register User' });


});

//@desc  Logout a new user
//route POST /api/users
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '' , {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'User Logged Out ' });


});

//@desc  Register a new user
//route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
   
    res.status(200).json(user);


});

//@desc  UPDATE user profile
//route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        // Send a single response with the updated user details
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email // Optionally include a message
        });
    } else {
        res.status(400);
        throw new Error('User not found');
    }
});



export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};