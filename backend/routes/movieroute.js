const express = require("express");
const getmoviecontroller = require("../controllers/movies/getmoviecontroller");
const router = express.Router();

router.get("/", getmoviecontroller);
router.get("/_id/:_id", getmoviecontroller);
router.get("/name/:name", getmoviecontroller);

module.exports = router;