var MYCOMPONENT = React.createClass({
    displayName: 'MYCOMPONENT',
    render: function() {
        return React.DOM.div(null, "Rendering faster in AngularJs with: ", this.props.framework);

    }
});
