const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Server beží na porte 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nastavenie pripojenia k databáze
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'WT',
});

// Pripojenie k databáze
db.connect((err) => {
  if (err) {
    console.error('Chyba pripojenia k databáze:', err.stack);
    return;
  }
  console.log('Pripojený k databáze!');
});

// Endpoint pre registráciu užívateľa (uloženie do databázy)
app.post('/register', (req, res) => {
  const { name, birthYear, country, email } = req.body;

  if (!name || !birthYear || !country || !email) {
    return res.status(400).json({ message: 'Všetky polia sú povinné.' });
  }

  // SQL dopyt na vloženie dát do tabuľky
  const query = `
    INSERT INTO formular (meno, rok_narodenia, stat, email)
    VALUES (?, ?, ?, ?)
  `;

  // Vloženie dát do databázy
  db.execute(query, [name, birthYear, country, email], (err, result) => {
    if (err) {
      console.error('Chyba pri ukladaní údajov:', err);
      return res.status(500).json({ message: 'Chyba pri ukladaní údajov' });
    }
    res.status(200).json({ message: 'Údaje boli úspešne uložené' });
  });
});

app.get('/users', (req, res) => {
  const query = 'SELECT id, meno, rok_narodenia, stat, email FROM formular';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Chyba pri získavaní užívateľov:', err);
      return res.status(500).json({ message: 'Chyba pri získavaní užívateľov' });
    }
    res.json(results);
  });
});
// Spustenie servera
app.listen(port, () => {
  console.log(`Server beží na http://localhost:${port}`);
});

