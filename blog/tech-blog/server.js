const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


app.get('/', (req, res) => {
  res.send('Welcome to the Tech Blog API');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
