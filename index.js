const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Route to serve the HTML page directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
