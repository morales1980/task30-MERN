const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');

const loadTestData = require('./testData');

const app = express();

//import routes
const postRoutes = require('./routes/post.routes');

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', postRoutes);

//connect backend code with mongoDB
mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
});
db.on('error', (error) => console.log('Something is wrong here ' + error));

app.listen(config.PORT, function() {
  console.log('Server is running on port: ', config.PORT);
});
