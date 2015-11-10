import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Route from '../modules/reactRouterMixin';
import RouterModel from '../modules/routerModel';

function createStubComponent() {
    return React.createClass({
        mixins: [Route],

        render: function() {
            return (<div className = 'stub' router = {new Router()}>
                {this.state.routeMatch ? 'visible' : 'hidden'}
            </div>)
        }
    })
}


describe('react router component test', function() {

    var node;

    beforeEach(function() {

        window.location.hash = '';
        node = document.createElement('div');
        document.body.appendChild(node);


    });

    afterEach(function() {

        window.location.hash = '';
        document.body.removeChild(node);
    });

    it('should render into document', function() {

        var Component = createStubComponent();
        React.render(<Component pattern = '/hello' />, node);
        expect(node.innerHTML.length).toBeGreaterThan(4);
    });

    it('should change state on hash change', function() {
        var Component = createStubComponent();
        React.render(<Component pattern = '/hello' />, node);
        window.location.hash = '/hello';
        expect(node.querySelector('.stub').innerHTML).toEqual('visible');

        window.loacation.hash = '/someRoute';
        expect(node.querySelector('.stub').innerHTML).toEqual('hidden');
    })
});

