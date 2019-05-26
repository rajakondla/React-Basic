"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass(
    {
        render: function () {
            return (
                <div className="jumbotron">
                    <h1>
                       Page Not Found.
                    </h1>
                    <p>Sorry, nothing to display in this page</p>
                    <Link to="app" className="btn btn-primary btn-lg" >Back to Home.</Link>
                </div>
            );
        }
    }
);

module.exports = NotFound;