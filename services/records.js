var Record = require('../models/databaseModels').Record;

exports.addRecord = function (input, next) {

    var newRecord = new Record({
        school: input.school,
        sleep: input.sleep,
        tired: input.tired,
        reliever: input.reliever,
        recordDate: input.recordDate
    });

    newRecord.save(function (err) {
        if (err) {
            return next(err);
        }
        else {
            next(null);
        }

    });
};

exports.findRecord = function (input, next) {
    Record.findOne({
        recordDate: input.recordDate
    }, function (err, object) {
        next(err, object);
    });
};

exports.updateSchoolRecord = function (input, next) {
    Record.update({
        recordDate: input.recordDate
    }, {
        $set: {
            'school': input.school
        }
    }, function (err, result) {
        if (err) {
            next(err);
        }
    });
};
exports.updateTiredRecord = function (input, next) {
    Record.update({
        recordDate: input.recordDate
    }, {
        $set: {
            'tired': input.tired
        }
    }, function (err, result) {
        if (err) {
            next(err);
        }
    });
};
exports.updateSleepRecord = function (input, next) {
    Record.update({
        recordDate: input.recordDate
    }, {
        $set: {
            'sleep': input.sleep
        }
    }, function (err, result) {
        if (err) {
            next(err);
        }
    });
};
exports.updateRelieverRecord = function (input, next) {
    Record.update({
        recordDate: input.recordDate
    }, {
        $set: {
            'reliever': input.reliever
        }
    }, function (err, result) {
        if (err) {
            next(err);
        }
    });
};