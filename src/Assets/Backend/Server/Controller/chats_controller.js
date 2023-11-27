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

module.exports = chat