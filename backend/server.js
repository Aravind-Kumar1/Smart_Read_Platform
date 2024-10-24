const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema and model for notes
const noteSchema = new mongoose.Schema({
  userId: String,
  bookId: String,
  notes: String,
});

const Note = mongoose.model('Note', noteSchema);

// API endpoint to save notes
app.post('/api/notes', async (req, res) => {
  const { userId, bookId, notes } = req.body;

  try {
    const existingNote = await Note.findOne({ userId, bookId });
    if (existingNote) {
      // Update existing note
      existingNote.notes = notes;
      await existingNote.save();
    } else {
      // Create a new note
      const newNote = new Note({
        userId,
        bookId,
        notes,
      });
      await newNote.save();
    }
    res.status(200).json({ message: 'Notes saved successfully' });
  } catch (error) {
    console.error("Error saving notes:", error);
    res.status(500).json({ message: 'Error saving notes', error });
  }
});

// API endpoint to fetch notes
app.get('/api/notes/:userId/:bookId', async (req, res) => {
  const { userId, bookId } = req.params;

  try {
    const note = await Note.findOne({ userId, bookId });
    if (note) {
      res.status(200).json({ notes: note.notes });
    } else {
      res.status(404).json({ message: 'Notes not found' });
    }
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: 'Error fetching notes', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
