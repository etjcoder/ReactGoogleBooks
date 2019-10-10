const path = require("path");
const axios = require("axios");
const router = require("express").Router();

//API Routes
router.use("/api", apiRoutes);

//IF no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;