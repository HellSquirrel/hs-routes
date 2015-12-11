var React = require('react');

import {createRoute, goTo} from '../helpers/utils';
import Parser from '../helpers/routeParser';
var cn = require('classnames');

var Link = React.createClass( {
    isActive() {

        return window.location.hash.slice(-1) === this.props.to;
    },

    render() {

        var classes = cn({
            'route-link': true,
            'route-link--active': this.isActive()
        }, this.props.className);

        return (
            <div className = {classes} onClick = {goTo.bind(this, this.props.to, this.props.query)}>
                {this.props.children}
            </div>
        )
    }
});

export default Link;
