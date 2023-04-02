//  `/api/projects` router buraya
const { getAll, insert } = require("./model");
const router = require("express").Router();

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
