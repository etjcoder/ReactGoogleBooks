const router = require("express").Router();
const bookRoutes = require("./books");
const dialRoutes = require("./dials");

// Book routes
router.use("/books", bookRoutes);
router.use("/dials", dialRoutes);

module.exports = router;