const express = require('express');
const sqlite3 = require('sqlite3').verbose()
const app = express();

const port = process.env.PORT || 3001;


// Open the database and make it available via app.locals
const db = new sqlite3.Database('file.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS lorem (info TEXT)`);
  }
});

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
    }
  });
});





if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;