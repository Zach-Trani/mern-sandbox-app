// routes/home.js

const express = require('express');
const router = express.Router();
const ItemList = require('../models/itemlist');

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await ItemList.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new item
router.post('/', async (req, res) => {
  const item = new ItemList({
    text: req.body.text,
    number: req.body.number,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;