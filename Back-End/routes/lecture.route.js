const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Employee model
let Lecture= require('../models/lecture');

// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
  Lecture.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = lectureRoute;
