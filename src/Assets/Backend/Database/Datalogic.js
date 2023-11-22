const { usersCollection, chatsCollection } = require("./Config");

const InsertUser = async () => {
  try {
    await usersCollection.create({
      firstName: 'Zain',
      lastName: 'Khan',
      userEmail: 'zaini@gmail.com',
      userPass: '1234', // Assuming you want to store passwords as strings
    });
    console.log("User data inserted successfully");
  } catch (error) {
    console.error("Error inserting user data:");
  }
};

// Queries for GPT_Chats Collection

const InsertChats = async () => {
  try {
    await chatsCollection.create({
      userChats: "How are you!",
      gptResponse: "I am an AI so I have no feelings. If you have anything else, feel free to ask.",
    });
    console.log("Chats data inserted successfully");
  } catch (error) {
    console.error("Error inserting chats data:");
  }
};

// Call the functions
InsertUser();
InsertChats();
