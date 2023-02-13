const router = require('express').Router();

// require controllers
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// get all users 
// /api/users
router.route('/').get(getAllUsers);

// get one user
// /api/users/:userId
router.route('/:userId').get(getOneUser);

// create user
// /api/users/createUser
router.route('/createUser').post(createUser);

// delete user
// /api/users/deleteUser/:_id
router.route('/deleteUser/:_id').delete(deleteUser)

// update user
// /api/users/updateUser/:_id
router.route('/updateUser/:_id').put(updateUser)

// add friend
// /api/users/:userId/addFriends/:friendId
router.route('/:userId/addFriends/:friendId').put(addFriend)

// delete friend
// /api/users/:userId/deleteFriends/:friendId
router.route('/:userId/deleteFriends/:friendId').delete(deleteFriend)


module.exports = router