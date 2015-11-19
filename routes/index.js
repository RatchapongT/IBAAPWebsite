var express = require('express');
var router = express.Router();
var databaseFunction = require('../services/records');
var Todo = require('../models/databaseModels').Todo;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('LogIn', {title: 'LogIn'});
});

router.get('/FirstScreen', function (req, res, next) {
    res.render('FirstScreen', {title: 'FirstScreen'});
});

router.post('/update/:date1/:date2/:date3/:date4/:date5/:date6/:date7', function (req, res, next) {
    console.log("222");
    res.render('GreenZone', {title: 'FirstScreen', result: 'LOLL'});
});
router.get('/GreenZone', function (req, res, next) {
    res.render('GreenZone', {title: 'GreenZone'});
});

router.get('/YellowZone', function (req, res, next) {
    res.render('YellowZone', {title: 'YellowZone'});
});

router.get('/RedZone', function (req, res, next) {
    res.render('RedZone', {title: 'RedZone'});
});

router.get('/Practice', function (req, res, next) {
    res.render('Practice', {title: 'Practice'});
});

router.get('/Triggers', function (req, res, next) {
    res.render('Triggers', {title: 'Triggers'});
});

router.get('/Notification', function (req, res, next) {
    res.render('Notification', {title: 'Notification'});
});

router.get('/SendPlan', function (req, res, next) {
    res.render('SendPlan', {title: 'SendPlan'});
});

router.post('/updatePen/:pen/:recordDate', function (req, res, next) {
    var recordInput = {
        recordDate: req.params.recordDate
    };
    databaseFunction.findRecord(recordInput, function (err, recordObject) {
        if (err) {
            return res.send(err);
        }
        if (recordObject == null) {
            var newRecord = {
                school: true,
                sleep: false,
                tired: false,
                reliever: false,
                recordDate: req.params.recordDate
            };
            databaseFunction.addRecord(newRecord, function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    console.log("Success!");
                    return;
                }
            });
        } else {
            var updateInput = {
                recordDate: req.params.recordDate,
                school: req.params.pen
            };
            databaseFunction.updateSchoolRecord(updateInput, function (err, object) {
                if (err) {
                    return res.send(err);
                }
                console.log(object);
                return;
            });
        }
    });

});
router.post('/updateSleep/:sleep/:recordDate', function (req, res, next) {
    var recordInput = {
        recordDate: req.params.recordDate
    };
    databaseFunction.findRecord(recordInput, function (err, recordObject) {
        if (err) {
            return res.send(err);
        }
        if (recordObject == null) {
            var newRecord = {
                school: false,
                sleep: true,
                tired: false,
                reliever: false,
                recordDate: req.params.recordDate
            };
            databaseFunction.addRecord(newRecord, function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    console.log("Success!");
                    return;
                }
            });
        } else {
            var updateInput = {
                recordDate: req.params.recordDate,
                sleep: req.params.sleep
            };
            databaseFunction.updateSleepRecord(updateInput, function (err, object) {
                if (err) {
                    return res.send(err);
                }
                console.log(object);
                return;
            });
        }
    });
});
router.post('/updateTired/:tired/:recordDate', function (req, res, next) {
    var recordInput = {
        recordDate: req.params.recordDate
    };
    databaseFunction.findRecord(recordInput, function (err, recordObject) {
        if (err) {
            return res.send(err);
        }
        if (recordObject == null) {
            var newRecord = {
                school: false,
                sleep: false,
                tired: true,
                reliever: false,
                recordDate: req.params.recordDate
            };
            databaseFunction.addRecord(newRecord, function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    console.log("Success!");
                    return;
                }
            });
        } else {
            var updateInput = {
                recordDate: req.params.recordDate,
                tired: req.params.tired
            };
            databaseFunction.updateTiredRecord(updateInput, function (err, object) {
                if (err) {
                    return res.send(err);
                }
                console.log(object);
                return;
            });
        }
    });
});
router.post('/updateReliever/:reliever/:recordDate', function (req, res, next) {
    var recordInput = {
        recordDate: req.params.recordDate
    };
    databaseFunction.findRecord(recordInput, function (err, recordObject) {
        if (err) {
            return res.send(err);
        }
        if (recordObject == null) {
            var newRecord = {
                school: false,
                sleep: false,
                tired: false,
                reliever: true,
                recordDate: req.params.recordDate
            };
            databaseFunction.addRecord(newRecord, function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    console.log("Success!");
                    return;
                }
            });
        } else {
            var updateInput = {
                recordDate: req.params.recordDate,
                reliever: req.params.reliever
            };
            databaseFunction.updateRelieverRecord(updateInput, function (err, object) {
                if (err) {
                    return res.send(err);
                }
                console.log(object);
                return;
            });
        }
    });
});

router.get('/Notes/:recordDate', function (req, res, next) {
    res.render('NotesPage', {
        title: 'Notes',
        recordDate: req.params.recordDate
    });
});


router.get('/api/todos/:recordDate', function (req, res, next) {
    getTodos(req.params.recordDate, res);
});

router.post('/api/todos/:recordDate', function (req, res, next) {
    Todo.create({
        recordDate: req.params.recordDate,
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        getTodos(req.params.recordDate, res);
    });
});

router.delete('/api/todos/:recordDate/:todo_id', function (req, res, next) {
    Todo.remove({
        recordDate: req.params.recordDate,
        _id: req.params.todo_id
    }, function (err, todo) {
        if (err)
            res.send(err);

        getTodos(req.params.recordDate, res);
    });
});


function getTodos(recordDate, res) {
    Todo.find({recordDate : recordDate}, function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format
    });
};


module.exports = router;
