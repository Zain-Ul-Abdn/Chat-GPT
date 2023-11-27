const mongoose = require("mongoose");

//Authenticated_Users Collection Schema
const userSchema = new mongoose.Schema({
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

//GPT_Chats collection Schema
const chatSchema = new mongoose.Schema({
    userChat :{
        type : String
    },
    gptResponse : {
        type : String
    }
});

const usersCollection = mongoose.model('Authenticated_Users', userSchema);
const chatsCollection = mongoose.model('GPT_Chats', chatSchema);

module.exports = {usersCollection, chatsCollection};