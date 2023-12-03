const { chatsCollection } = require('../../Database/Model')

const chat = async (req, res) => {

    try {
        const { query, response } = req.body
        await chatsCollection.create({
            userChat: query,
            gptResponse: response
        });
        res.json({ query, response })
    } catch (error) {
        console.log(error)
    }
}

const fetchQueries = async (req, res) => {
    try {
        const queries = await chatsCollection.find();
        res.json({ queries });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    chat,
    fetchQueries
};