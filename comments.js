// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});