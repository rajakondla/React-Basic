"use strict";

var React = require("react");
var Router = require("react-router");

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect=Router.Redirect;

var Routes = (
    <Route name="app" path="/" handler={require("./Components/App")} >
        <DefaultRoute handler={require("./Components/HomePage")} />
        <Route name="authors" handler={require("./Components/Authors/AuthorPage")} />
        <Route name="addAuthor" path="author" handler={require("./Components/Authors/AddAuthorPage")} />
        <Route name="manageAuthor" path="author/:id" handler={require("./Components/Authors/AddAuthorPage")} />
        <Route name="about" handler={require("./Components/About/AboutPage")} />
        <NotFoundRoute handler={require("./Components/NotFoundPage")} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = Routes;