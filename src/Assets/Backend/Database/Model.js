const mongoose = require("mongoose");
const mongoCon = require("./Config");

 mongoCon()

//Authenticated_Users Collection Schema
const userSchema = async () =>
    await new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPass: {
        type: Number,
        required: true
    }
});
const usersCollection = mongoose.model('Authenticated_Users', userSchema)

//GPT_Chats collection Schema

const chatSchema = async () =>
  await new mongoose.Schema({
    userChat :{
        type : String
    },
    gptResponse : {
        type : String
    }
});

const chatsCollection = mongoose.model('GPT_Chats',chatSchema)

module.exports = {usersCollection, chatsCollection}