const { User, Thought } = require('../models/index');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        User.find()
            .then((thoughts) => {
                res.json(thoughts)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err);
            })
    },
    // get one user by _id
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId})
            .then((user) => {
                if(!user) {
                    res.status(404).json({ message: "No user with that ID found!"})
                } else {
                    res.json(user)
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    // create user
    createUser(req, res) {
        
    }
}