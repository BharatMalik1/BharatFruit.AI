const express = require('express');
const FAQ = require("../models/faqModel");
const router = express.Router();

// GET all FAQs
router.get('/faqs', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new FAQ
router.post('/faqs', async (req, res) => {
  const faq = new FAQ({
    question: req.body.question,
    answer: req.body.answer,
  });
  try {
    const newFaq = await faq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (Update) an FAQ by ID
router.put('/faqs/:id', async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });

    faq.question = req.body.question;
    faq.answer = req.body.answer;

    const updatedFaq = await faq.save();
    res.json(updatedFaq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an FAQ by ID
router.delete('/faqs/:id', async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });

    res.json({ message: "FAQ deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
