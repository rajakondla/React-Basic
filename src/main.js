"use strict";
var React = require('react');
var Router = require("react-router");
var Routes = require("./Route");

// has location style
/*
Router.run(Routes, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});
*/

// History location style
Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});