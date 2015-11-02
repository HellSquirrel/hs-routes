var  ReactRouterComponent = {

    componentDidMount() {

        this.props.router.addPattern(this.props.pattern, function() {

        });

    }
};

module.exports = ReactRouterComponent;

