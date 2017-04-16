var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var ENTRIES_COLLECTION = "entries";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var db;
mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = database;
    console.log('Database connection ready');

    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log('App now running on port', port);
    })
})

// Generic error handler
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ 'error': message });
}

// api

app.get('/api/peoples', function(req, res) {
    db.collection(ENTRIES_COLLECTION).find({ 'contest': 'peoples' }).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get Peoples choice entries.");
        } else {
            res.status(200).json(docs);
        }
    })
})

app.get('/api/style', function(req, res) {
        db.collection(ENTRIES_COLLECTION).find({ 'contest': 'style' }).toArray(function(err, docs) {
            if (err) {
                handleError(res, err.message, "Failed to get Peoples choice entries.");
            } else {
                console.log(docs);
                res.status(200).json(docs);
            }
        })
    })
    /*
    /* a contest entry
    {
      'contest': 'style|peoples',
      'style': 'yadda',
      'brewer': 'who done it'
    }
    */

app.get('/api/entries', function(req, res) {
    db.collection(ENTRIES_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get entries.");
        } else {
            console.log(docs);
            res.status(200).json(docs);
        }
    })
});

app.get('/api/entries/:id', function(req, res) {
    db.collection(ENTRIES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get tap");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.post('/api/entries', function(req, res) {
    var entry = req.body;

    if (!req.body.contest ||
        !req.body.style ||
        !req.body.brewer) {
        handleError(res, "Invalid user input", "Must provide a contest, style and brewer.", 400);
    }

    db.collection(ENTRIES_COLLECTION).insertOne(entry, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new entry.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
})

app.post('/api/entries/:id', function(req, res) {
    var entry = req.body;

    if (!req.body.contest ||
        !req.body.style ||
        !req.body.brewer) {
        handleError(res, "Invalid user input", "Must provide a contest, style and brewer.", 400);
    }

    db.collection(ENTRIES_COLLECTION).updateOne(entry, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update entry.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
})

app.delete('/api/entries/:id', function(req, res) {
    db.collection(ENTRIES_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete entry");
        } else {
            res.status(200).json(req.params.id);
        }
    })
})