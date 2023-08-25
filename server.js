const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json()); // Parse JSON requests

app.use('/api', apiRoutes); // Mount API routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
