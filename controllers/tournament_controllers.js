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
            let object = {
                tourneys: data
            };
            res.render("index", object);
        })
    });
    app.post("/api/tourneys", function (req, res) {
        db.Tourneys.create({
            name: req.body.name,
            attended: req.body.attendance
        }).then(function (data) {
            res.json(data);
        });
    });
    app.put("/api/tourneys/:id", function (req, res) {
        db.Tourneys.update({
            attended: req.body.attendance
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbTourney) {
                res.json(dbTourney);
            })
    });

}
