const express = require('express');
const { db } = require('./db');

const app = express();

const port = process.env.PORT || 3001;


// Make db accessible in routes via req.app.locals.db
app.locals.db = db;

app.get('/api/hello', (req, res) => {
  let db = req.app.locals.db;
  db.run(`INSERT INTO lorem(info) VALUES ('Hello World')`);
  db.all(`SELECT * FROM lorem`, [], (err, rows) => {
    if (err) {
      res.status(500).send('Error retrieving data');
    } else {
      res.json(rows);
      console.log(rows);
    }
  });
});





if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;