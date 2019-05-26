"use strict";

var React = require('react');
var AuthorAPI = require('../../API/AuthorAPI');
var AuthorList = require('./AuthorList');
var Router = require('react-router');
var Link = Router.Link;

var Authors = React.createClass(
    {
        //statics: {

        //    willTransitionTo: function (transition, params, query, callback) {
        //        if (!confirm("Are you sure you want to view? ")) {
        //            transition.authors();
        //        }
        //        else {
        //            callback();
        //        }
        //    },
        //    willTransitionFrom: function (transition, component) {
        //        if (!confirm("Are you sure you leave this page? ")) {
        //            transition.authors();
        //        }
        //    }
        //},

        getInitialState: function () {
            return {
                authors: []
            };
        },

        componentDidMount: function () {
            if (this.isMounted()) {
                this.setState({ authors: AuthorAPI.getAllAuthors() });
            }
        },

        render: function () {
           
            return (
                <div>
                    <h1>Authors</h1>
                    <Link to="addAuthor" className="btn btn-default" >Add Author</Link>
                    <AuthorList authors={this.state.authors} />                 
                </div>                    
                );
        }
    }
);

module.exports = Authors;