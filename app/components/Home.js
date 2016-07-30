import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>Home page</h1>
                <p>{this.props.text}</p>
            </div>
        );
    },
    componentDidMount: function() {
        return;
    }
});
