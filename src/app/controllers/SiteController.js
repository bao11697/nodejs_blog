const Course = require('../models/Course');
const {mutipleMongooseToObject} =require('../../uttil/mongoose');
class SiteController {
    //GET /
    home(req, res) {
        Course.find({})
            .then(courses => {
                // Vì mongo return value có phần sercurity nên ko thể in giá trị trực tiếp => Phải dùng helper để convert giá trị qa
               res.render('home', {courses : mutipleMongooseToObject(courses)});
                })
            
            .catch(err => res.status(400).json({ error: 'ERROR..!!!' }))

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
        console.log(req.body);
    }
}
module.exports = new SiteController();
