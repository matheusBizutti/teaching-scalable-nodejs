const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const express = require('express');
const routes = require('./routes/routes');
const errorHandler = require('./middlewares/error-handler');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Loggin format
app.use(morgan('combined'));

app.use(cors());         
app.use(helmet()); 

app.use(express.json());
app.use('/v1/', routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
