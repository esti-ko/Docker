
const express = require('express');

const { 
    getBootcamps,
    getBootcamp,
    postBootcamp,
    putBootcamp,
    deleteBootcamp
} =require('../controllers/bootcamps')

const routes = express.Router();

routes.route('/')
    .get(getBootcamps)
    .post(postBootcamp);

routes.route('/:id')
    .get(getBootcamp)
    .put(putBootcamp)
    .delete(deleteBootcamp);


module.exports = routes;