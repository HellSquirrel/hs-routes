var  ReactRouterComponent = {

    getInitialState() {
        return {routeMatch: false}
    },

    componentDidMount() {

        this.props.router.addPattern(this.props.pattern, {
            close: function() {
                this.setState({routeMatch: false})
            },

            open: function() {
                this.setState({routeMatch: true})
            }
        });

    }
};

module.exports = ReactRouterComponent;

