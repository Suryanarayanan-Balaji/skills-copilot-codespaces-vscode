// Create web server using express
const express = require('express');
const app = express();

// Middleware
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Import routes
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

// Import db
const db = require('./db');

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

// Routes
app.use('/posts', postsRoute);
app.use('/comments', commentsRoute);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
