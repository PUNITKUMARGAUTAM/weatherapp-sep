const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const weatherRoute = require('./routes/weatherRoute');

app.use('/api/weather' , weatherRoute);

const PORT = process.env.PORT || 9000;

app.listen(PORT , () => {
    console.log(`Server started at ${PORT}`);
})