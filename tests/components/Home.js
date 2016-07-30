import React from 'react';
import { mount } from 'enzyme';
import Home from '../../app/components/Home';
import { expect } from 'chai';
import sinon from 'sinon';

describe('<Home/>', function() {
    var wrapper;

    it('calls componentDidMount once only', function() {
        var spy = sinon.spy(Home.prototype, 'componentDidMount');
        wrapper = mount(<Home text="Hello, world!"/>);
        expect(spy.calledOnce).to.equal(true);
    });

    it('`props` contains a `text` property with a value of "Hello, world!"', function() {
        expect(wrapper.props().text).to.equal('Hello, world!');
    });

    it('has an `h1` tag with the text "Home page"', function() {
        expect(wrapper.contains(<h1>Home page</h1>)).to.equal(true);
    });

    after(function() {
        global.window.close();
    });
});
