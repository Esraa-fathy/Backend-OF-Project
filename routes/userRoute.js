const router = require("express").Router();
const verifyToken = require("../middlewares/authJwt");

router.get("/api/test/user", [verifyToken], (req, res) => {
res.status(200).send("Authorized user");

});


module.exports = router;

