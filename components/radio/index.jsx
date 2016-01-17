var React = require('react');

var classNames = require('classnames');


    var Radio = React.createClass({
  getInitialState: function() {
    return {isSelected: this.props.isSelected};
  },
 
  handleOnClick: function (evt) {
    var isSelected=!this.state.isSelected;
    this.setState({'isSelected': isSelected})
  },
  render: function() {
     
     var className=classNames('g-radio', { "radio-current" : this.state.isSelected}); 
 

     return (
      <span className={className} onClick={this.handleOnClick}></span>
    );
  }
});

module.exports = Radio