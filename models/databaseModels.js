var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate');

var userSchema = new Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now}
});

userSchema.path('username').validate(function (username, next) {
    User.findOne({username : username}, function (err, user) {
        if (err) {
            return next(false);
        }
        if (!user) {
            return next(true); //Valid
        } else {
            return next(false);
        }
    });
}, 'Username Already Exists');

var userDetailSchema = new Schema({
    interest: [String],
    accountType: String,
    profilePicture: String,
    _userDetail: {type: Schema.Types.ObjectId, ref: 'User'},
    created: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);
var UserDetail = mongoose.model('UserDetail', userDetailSchema);

module.exports = {
    User: User,
    UserDetail: UserDetail
};