"use strict";

var React = require('react');
var Input = require('../Common/TextInput');

var AuthorForm = React.createClass({
        
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        error: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                <h1> Manage Author </h1>
                {
                    /* using reapeated input control
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="form-control"
                        placeholder="First Name" ref="firstName" value={this.props.author.firstName}
                        onChange={this.props.onChange} />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="form-control"
                        placeholder="Last Name" ref="lastName" value={this.props.author.lastName}
                        onChange={this.props.onChange} />
                    <br />
                    */
                }
                <Input name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} error={this.props.error.firstName} />

                <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.error.lastName} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
            );
    }
});

module.exports = AuthorForm;