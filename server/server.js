const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/posts', (req, res) => {
  const data = [
    {id: '123asd', title: 'lorem impsum', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {id: '123asd', title: 'lorem impsum', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
  ]
  res.json(data);
});

app.listen(8000, function() {
  console.log('Server is running on port: ', 8000);
});
