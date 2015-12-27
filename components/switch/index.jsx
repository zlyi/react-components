var React = require('react');

    var Switch = React.createClass({
  getInitialState: function() {
    return {isSelected: this.props.isSelected};
  },
  handleOnClick: function (evt) {
       evt.preventDefault();

  var isSelected=this.state.isSelected;
    this.setState({'isSelected': !isSelected})
  },
  render: function() {
            var checked= this.state.isSelected?"checked":"";
     return (
<label className="g-switch" onClick={this.handleOnClick}>
                <input className="switch-input" type="checkbox" checked={checked}/>
                <span className="switch-ui"></span>
         </label>
             );
  }
});

module.exports = Switch