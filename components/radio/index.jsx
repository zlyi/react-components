var React = require('react');

    var Radio = React.createClass({
  getInitialState: function() {
    return {isSelected: this.props.isSelected};
  },
 
  handleOnClick: function (evt) {
    var isSelected=!this.state.isSelected;
    this.setState({'isSelected': isSelected})
  },
  render: function() {
     
     var className= this.state.isSelected==true?"g-radio radio-current":"g-radio";

     return (
      <span className={className} onClick={this.handleOnClick}></span>
    );
  }
});

module.exports = Radio