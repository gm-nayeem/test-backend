const router = require("express").Router();
const {
    createUser, deleteUser, getAllUser
} = require("../controllers/userController");

router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/", getAllUser);

module.exports = router;