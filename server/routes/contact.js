const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Submit Contact Form
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to submit contact form" });
  }
});

module.exports = router;
