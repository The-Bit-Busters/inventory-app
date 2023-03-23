const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { check, validationResult } = require("express-validator");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /items/:id
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// POST /items
router.post(
  "/",
  [
    check("title").not().isEmpty().trim(),
    check("price").not().isEmpty(),
    check("description").not().isEmpty().trim(),
    check("category").not().isEmpty().trim(),
    check("image").not().isEmpty().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      try {
        const item = await Item.create(req.body);
        res.status(200).send(item);
      } catch (error) {
        console.error("Couldn't create new item", error);
      }
    }
  }
);

// PUT /items/:id
router.put(
  "/:id",
  [
    check("title").not().isEmpty().trim(),
    check("price").not().isEmpty(),
    check("description").not().isEmpty().trim(),
    check("category").not().isEmpty().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      try {
        const item = await Item.findByPk(req.params.id);
        await item.update(req.body);
        res.status(200).send(item);
      } catch (error) {
        console.error("Couldn't update item", error);
      }
    }
  }
);

// DELETE /items/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Item.destroy({
      where: { id },
    });
    const items = await Item.findAll();
    res.status(200).send(items);
  } catch (error) {
    console.error("Couldn't delete item", error);
  }
});

module.exports = router;
