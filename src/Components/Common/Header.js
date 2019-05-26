"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass(
    {
        render: function () {
            return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid" >
                        <Link to="/" className="nav navbar-nav">
                            <img src="images/wildlife3.jpg" height="50px" alt="No image available" />
                        </Link>
                        <ul className="nav navbar-nav">
                            {
                             /*
                              * <li><a href="/">Home</a></li>
                            <li><a href="/#authors">Authors</a></li>
                            <li><a href="/#about">About</a></li>
                            If we use anchor tag for menu there will be post back and page reloads.
                            So we use link to avoid post back.
                            If we use hard code href like #about and used multiple places, 
                            what if there is any mismatch in string.  
                            */
                            }

                            <li><Link to="app">Home</Link></li>
                            <li><Link to="authors">Authors</Link></li>
                            <li><Link to="about">About</Link></li>
                        </ul>
                    </div>
                 </nav>
                );
        }
    }
);

module.exports = Header;