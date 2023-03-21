const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /item/:id
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

//POST /item/
router.post("/", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(200).send(item);
  } catch (error) {
    console.error("Couldn't create new item", error);
  }
});

//PUT /item/:id
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    console.error("Couldn't update item", error);
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id
    await Item.destroy({
      where: {id}
    })
    const items = await Item.findAll();
        res.status(200).send(items);
  } catch (error) {
    console.error("Couldn't delete item", error);
  }
});


module.exports = router;
