const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.send('Hello from Express!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;