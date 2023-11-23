const { usersCollection, chatsCollection } = require("./Model");

const InsertUser = async () => {
    await usersCollection.create({
      firstName: 'Zain',
      lastName: 'Khan',
      userEmail: 'zaini@gmail.com',
      userPass: '1234'
    });
    
};

// Queries for GPT_Chats Collection

const InsertChats = async () => {
    await chatsCollection.create({
      userChats: "How are you!",
      gptResponse: "I am an AI so I have no feelings. If you have anything else, feel free to ask.",
    });
};

// Call the functions
// InsertUser();
// InsertChats();
