$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./Components/HomePage');
var Authors = require('./Components/Authors/AuthorPage');
var About = require('./Components/About/AboutPage');
var Header = require('./Components/Common/Header');
//var App = console.log('Hello world from Browserify');

(function(win) {
    'use strict';

    var App = React.createClass({
        render: function () {
            var Child;

            switch (this.props.route) {
                case 'about': Child = About;
                    break;
                case 'author': Child = Authors;
                    break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                   
                </div>
            );
        }
    }
    );

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    render();
    win.addEventListener('hashchange', render);
}
) (window);
//module.exports = App;
//React.render(<Home />, document.getElementById('app'));
  
