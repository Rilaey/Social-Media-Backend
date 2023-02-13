const router = require('express').Router();

// require controller functions
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsController')

// get all thoughts
// /api/thoughts
router.route('/').get(getAllThoughts);

// get one thought
// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOneThought);

// create thought
// /api/thoughts/createThought
router.route('/createThought').post(createThought);

// delete thought
// /api/thoughts/deleteThought/:thoughtId
router.route('/deleteThought/:thoughtId').delete(deleteThought);

// update thought
// /api/thoughts/updateThought/:thoughtId
router.route('/updateThought/:thoughtId').put(updateThought);

// create reaction
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/createReaction').post(createReaction);

// delete reaction
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/deleteReaction').delete(deleteReaction);

module.exports = router;