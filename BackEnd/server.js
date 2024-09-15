const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // To handle JSON payloads
app.use(cors()); // To handle Cross-Origin Resource Sharing

// MongoDB connection
const mongoURI = 'mongodb+srv://bharatmalik:bharatmalik123@cluster0.hzxpc.mongodb.net/food-del'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// FAQ Model (Mongoose Schema)
const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const FAQ = mongoose.model('FAQ', faqSchema);

// Routes for CRUD Operations
// GET all FAQs
app.get('/api/faqs', async (req, res) => {
  try {
    const faqs = await FAQ.find(); // Fetch all FAQs from the database
    res.json(faqs); // Send FAQs back as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error: error.message });
  }
});

// POST a new FAQ
app.post('/api/faqs', async (req, res) => {
  const { question, answer } = req.body;

  const newFaq = new FAQ({
    question,
    answer,
  });

  try {
    const savedFaq = await newFaq.save(); // Save the new FAQ to the database
    res.status(201).json(savedFaq); // Respond with the saved FAQ
  } catch (error) {
    res.status(400).json({ message: 'Error adding FAQ', error: error.message });
  }
});

// PUT (Update) an FAQ by ID
app.put('/api/faqs/:id', async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const faq = await FAQ.findById(id); // Find the FAQ by ID
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });

    faq.question = question;
    faq.answer = answer;

    const updatedFaq = await faq.save(); 
    res.json(updatedFaq); 
  } catch (error) {
    res.status(400).json({ message: 'Error updating FAQ', error: error.message });
  }
});

// DELETE an FAQ by ID
app.delete('/api/faqs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const faq = await FAQ.findByIdAndDelete(id); // Find the FAQ by ID
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });

    res.json({ message: 'FAQ deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting FAQ', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
