var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var distDir = __dirname + '/dist/';
var storageDir = __dirname + '/audio_files/';
app.use(express.static(distDir));
app.use(express.static(storageDir));


var helpers = require('express-helpers');
helpers(app);



var server = app.listen(process.env.PORT || 4200, function () {
    console.log("server started")
});

app.get('/', function (req, res) {
    res.sendFile(distDir + 'index.html');
});
app.get('/upload', function (req, res) {
    res.sendFile(distDir + 'index.html');
});
app.get('/files', function (req, res) {
    res.sendFile(distDir + 'index.html');
});




//mongodb set up
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var db;
var FILE_COLLECTION = "files";

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    db = database;
    console.log("connected to db");
});




// file uploads with multer
//-------------------------------------------------------------------/

var path = require('path');
var multer = require('multer');
var crypto = require('crypto');
var storage = multer.diskStorage({
    destination: storageDir,
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err);

            cb(null, raw.toString('hex') + path.extname(file.originalname))
        })
    }
});
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(mp3|wav|ogg)$/)) {
            return cb(null, false, new Error('err: file type'));
        }
        cb(null, true);
    }

});

app.post('/api/process_upload', upload.single('myfile'), function (req, res) {

    if (req.file) {
        req.file.score = 0;

        db.collection(FILE_COLLECTION).insertOne(req.file, function (err, doc) {
            if (err) {
                handleError(res, err.message, "db Error: adding file");
                res.send('Error adding file info into db.');
            } else {
               res.send(req.file);

            }
        });
    }
    else if (Error) {
        res.send('error');

    }
});
//--------------------------------------------------------------------/

app.get('/api/recent', function (req, res) {
    //recent uploads
    db.collection(FILE_COLLECTION).find({}).sort({x: -1}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Error");
        } else {
            res.send(docs);
        }
    });
});

app.get('/api/top', function (req, res) {
    //top 5 uploads by score
    db.collection(FILE_COLLECTION).find({}).sort({score: -1}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Error");
        } else {
            res.send(docs);
        }
    });
});


app.get('/api/files/:id', function (req, res) {
    //files by id
    db.collection(FILE_COLLECTION).findOne({_id: new ObjectID(req.params.id)}, function (err, doc) {
        if (err) {
            handleError(res, err.message, "db Error: getting file by id");
        } else {
            res.send(doc);
        }
    });
});


app.post("/api/like/", function (req, res) {
    var fileId = req.body.fileId;
    db.collection(FILE_COLLECTION).update({_id: new ObjectID(fileId)}, {$inc: {score: 1}}, function (err, doc) {
        if (err) {
            handleError(res, err.message, "db Error: getting file by id");
        } else {
            res.sendStatus(200);
        }
    });

});



app.post("/api/dislike/", function (req, res) {
    var fileId = req.body.fileId;
    db.collection(FILE_COLLECTION).update({_id: new ObjectID(fileId)}, {$inc: {score: -1}}, function (err, doc) {
        if (err) {
            handleError(res, err.message, "db Error: getting file by id");
        } else {
            res.sendStatus(200);
        }
    });

});
