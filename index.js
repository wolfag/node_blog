const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  var a = 11;
  return res.send('hk');
});
app.listen(port, () => console.log('---->'));
