const {Course} = require('../models')

// view all
module.exports.viewAll = async function (req, res) {
    const courses = await Course.findAll();
    res.render('course/view_all', {courses});
}

// profile
module.exports.viewProfile = async function (req, res) {
    const course = await Course.findByPk(req.params.id);
    res.render('course/profile', {course});
}

// render add form

// add

// render edit form

// update

// delete