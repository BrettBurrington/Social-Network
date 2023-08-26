const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const thoughtRoutes = require('./routes/thoughtRoutes');
app.use('/api', thoughtRoutes);

const reactionRoutes = require('./routes/reactionRoutes');
app.use('/api', reactionRoutes);
