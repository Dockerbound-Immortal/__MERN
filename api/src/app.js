'use strict';

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('Test API is connected!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});