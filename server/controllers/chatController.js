import expressAsyncHandler from "express-async-handler";
import Chat from '../models/chatModel.js'



const accessChat = expressAsyncHandler(async (req, res) => {
    const { userId } = req.body;
    

    if (!userId) {
        console.log("userId  param not sent eith request");
        return res.sendStatus(400);
    }

    var isChat = await Chat.find();
});

const fetchChats = expressAsyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userId  param not sent eith request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find();
});
const createGroupChat = expressAsyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userId  param not sent eith request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find();
});
const renameGroup = expressAsyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userId  param not sent eith request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find();
});
const removeFromGroup = expressAsyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userId  param not sent eith request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find();
});
const addToGroup = expressAsyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userId  param not sent eith request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find();
});



export {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
};