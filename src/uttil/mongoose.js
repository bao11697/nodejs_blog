const { default: mongoose } = require("mongoose");

module.exports = {

    //Logic helper khi chi su dung nhan du lieu tu nhieu aray mongo database
    mutipleMongooseToObject : function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    //Logic function khi chi su dung 1 object tu mongo data base
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};