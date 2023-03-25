const { addUser, getLoggedInUser } = require("../controller/UserController");
const router = require("express").Router()

router.get("/getLoggedInUser", getLoggedInUser)

module.exports = router;
