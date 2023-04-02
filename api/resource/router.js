const router = require("express").Router();
const { getAll, insert } = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let getItems = await getAll();
    res.json(getItems);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    let created = await insert(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
