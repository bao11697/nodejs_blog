const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Chuyển chuỗi thành slug path
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required:true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    // unique : true tự động thêm mới chuỗi đuôi khi name trùng
    slug: { type: String, slug:'name'},
    videoId: { type: String, required:true },
    level: { type: String, maxLength: 255 }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
