const express = require("express");
const mycourseRoute = express.Router();
let Course = require('../modules/Course')
// Get All Courses

mycourseRoute.route("/mycourses").get((req, res) => {
  console.log("/mycourses ---get()");
  
  Course.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  }).sort({ bookId: 1 });
});
// Get Course By Id
mycourseRoute.route("/mycourse/:courseId").get((req, res, next) => {
  console.log("/mycourse/:courseId --- get()");
  Course.findOne({ courseId: req.params.courseId }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
module.exports = mycourseRoute;
