const router = require('express').Router();
const main = require('./main');
const taskApi = require("./taskApi");

router.get('/', main);
router.get("/get/:id", taskApi.get);
router.post("/add", taskApi.add);
router.post("/update", taskApi.update);
router.get("/delete/:id", taskApi.delete);

module.exports = router;
