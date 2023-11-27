const user = async (req, res) => {

    try {
        res.send("It is user section")
    } catch (error) {
        console.log(error)
    }
}

module.exports = user;