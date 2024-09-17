const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/api/matches', require('./routes/matchRoutes'));
app.use('/api/players', require('./routes/playerRoutes'));
app.use('/api/carousel', require('./routes/carouselRoutes'));


app.use(express.static(path.join(__dirname, "public/frontend")));



// Route to serve the index.html file on the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/frontend/pages', 'index.html'));
});


app.get('/admin/players', (req, res) => {
  res.sendFile(path.join(__dirname, './admin/playerForm.html'));
});


app.get('/admin/matches', (req, res) => {
  res.sendFile(path.join(__dirname, './admin/matchForm.html'));
});


app.get('/admin/carousel', (req, res) => {
  res.sendFile(path.join(__dirname, './admin/carouselForm.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/api/carousel', async (req, res) => {
  try {
    const carouselItems = await Carousel.find().sort({ order: 1 });
    res.json(carouselItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching carousel items', error });
  }
});

 