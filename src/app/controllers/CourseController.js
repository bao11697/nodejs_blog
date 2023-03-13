const Course = require('../models/Course');
const {mongooseToObject} = require('../../uttil/mongoose');
class CourseController {
    // [GET] /courses/:slug
    show(req, res , next) {
    Course.findOne({slug: req.params.slug })
        .then(course=> {
            res.render('courses/show',{course : mongooseToObject(course)});
         })
        .catch(next);
    }

     // [GET] /courses/create
     create(req, res ) {
       res.render('courses/create');
        }

    // [POST] /courses/store
    store(req, res ) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const course = new Course(formData);
        course.save({})
            .then(()=> res.redirect('/'))
            .catch(err => {
                res.send("SAVE ERROR");
            })

    }
    // [GET] /courses/id/edit
    edit(req, res,next ) {
        Course.findById(req.params.id)
            .then(course =>res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
         }
    
    // [GET] /courses/id
     update(req, res,next ) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
        }
 
}
module.exports = new CourseController();
