var _ = require('lodash');

var  ReactRouterComponent = {

    getInitialState() {
        var patterns = this.props.patterns.reduce(function(result, patt) {
            result[patt] = false;
            return result;
        }, {});

        return {patterns}
    },


    componentDidMount() {

        this.props.patterns.forEach((pattern) => {
            this.props.router.addPattern(pattern, {
                close: (match) => {

                    var newState = _.clone(this.state);
                    newState.patterns[pattern] = false;
                    this.setState(newState);
                },

                open: (match) => {
                    var newState = _.clone(this.state);
                    newState.patterns[pattern] = match;
                    this.setState(newState);
                }
            });
        })
    },


    //matchObject or false
    getRouteState() {
        var patterns = this.state.patterns;
        for(var pattern in patterns) {
            if(patterns[pattern]) {
                return patterns[pattern];
            }
        }
    },

    render() {
        return this.getRouteState() ? this.renderRouteContent() : null;
    }
};

export default ReactRouterComponent;
