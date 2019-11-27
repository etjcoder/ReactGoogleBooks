const router = require("express").Router();
const dialController = require("../../controllers/dialController");

router.route("/session")
    .get(dialController.findDials)
    .post(dialController.createDial)


module.exports = router;