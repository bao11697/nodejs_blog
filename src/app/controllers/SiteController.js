class SiteController {
    //GET /
    home(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
        console.log(req.body);
    }
}
module.exports = new SiteController();
