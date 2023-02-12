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
  // TO-DO -- FINISH THIS CONTROLLER
  // create thought
  createThought(req, res) {
    Thoughts.create(req.body);
  },
  // update thought by _id
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { runValidators: true, new: true }
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
          req.json(thought);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};