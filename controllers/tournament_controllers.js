// We require express for our routes
var express = require("express");

var router = express.Router();
// Here we require the tourney module from models/tournaments.js
var Tourneys = require("../models/tournaments.js");

var db = require("../models/index.js");

// The routes for get (display), post (create) and put (update) are created
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Tourneys.findAll({}).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err)
        })
    });
    app.post("/api/tourneys", function (req, res) {
        db.Tourneys.create({
            name: req.body.name,
            attended: req.body.attendance
        }).then(function (data) {
            res.json(data);
        });
    app.put("/api/tourneys/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.Tourneys.update({
            attended: true
        }, condition, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, that means the ID does not exist so we throw a 404 error
               return res.status(404).end();
               } else {
                    res.status(200).end();
                }
            });
        });
    });
};
