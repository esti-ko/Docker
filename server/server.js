const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv')

// const logger = require('./middleware/logger')
const morgan = require('morgan')

const bootcamps = require('./routes/bootcamps')

dotenv.config({path: './config/config.env'});

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// app.use(logger);
app.use(cors());
app.use(express.json());       // to support JSON-encoded bodies
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT;

app.listen(PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);