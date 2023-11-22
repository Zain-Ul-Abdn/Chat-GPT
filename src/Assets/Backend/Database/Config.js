// Set up mongoose connection
const mongoose = require("mongoose");
const mongoUrl = "mongodb://127.0.0.1:27017/GPT_Database"
const mongoCon = async () => {
    await mongoose.connect(mongoUrl)
        .then(() => console.log('Mongo Connected......'))
        .catch(e => console.log(e))
}

module.exports = mongoCon