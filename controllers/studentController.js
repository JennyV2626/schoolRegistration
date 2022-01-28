const {Student} = require('../models')

//view all
module.exports.viewAll = async function(req, res){
    const students = await Student.findAll();
    res.render('student/view_All', {students});
}

//profile
module.exports.viewProfile = async function(req, res){
    const student = await Student.findByPk(req.params.id);
    res.render('student/profile', {student})
}
//render add

//add

//render edit
module.exports.renderEditForm = async function(req, res){
    const student = await Student.findByPk(req.params.id);
    res.render('student/edit', {student});
}

//update
module.exports.updateStudent = async function(req, res){
    const student = await Student.update({
        first_name: req.body.,
        department: req.body.department,
        instructor_name: req.body.instructor_name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/courses/profile/${req.params.id}`);
}


//edit

//delete