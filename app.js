const express = require('express');

const app = express();

const router = require('./routes/userRoutes');

app.use(express.json());

app.use('/users', router);

app.listen(4000);