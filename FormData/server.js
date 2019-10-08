const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'images/' });

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});
app.post('/', upload.single('image'), (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.listen(3005, () => {
  console.log('App corriendo en el puerto 3005');
});
