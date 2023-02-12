const { User, Thoughts } = require("../models/index");

module.exports = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find()
      .then((thought) => {
        console.log(`Here's all the thoughts!`);
        res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get one thought by _id
  getOneThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID!" });
        } else {
          console.log(`Here's your thought!`);
          res.json(thought);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create thought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "Unable to create thought!" });
        } else {
          res.json("Thought created!");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update thought by _id
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { thoughtText: req.body.thoughtText , username: req.body.username },
      { new: true }
    )
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID!" });
        } else {
          console.log("Thought updated!");
          res.json(thought);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete thought by _id
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID!" });
        } else {
          console.log("Thought deleted!");
          res.json(thought);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
