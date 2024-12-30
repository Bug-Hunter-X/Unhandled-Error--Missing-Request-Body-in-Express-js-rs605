const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body) {
    return res.status(400).send({ error: 'Request body is missing' });
  }
  const user = req.body;
  console.log(user);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));