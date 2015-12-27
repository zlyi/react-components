var React = require('react');

   var Alert = React.createClass({
  getInitialState: function() {
    var  messageValue=this.props.message?this.props.message:"成功";
    return {isShow: this.props.isShow,message:messageValue};
  },
componentWillReceiveProps:function(nextProps){
    this.setState({
      isShow: nextProps.isShow
    }); 
 this.closeToast();
},
  handleOnClick: function (evt) {
    this.setState({'isShow': "false"})
  },
  render: function() { 
     var className= this.state.isShow==="true"?"c-alert animated bounceIn":"c-alert animated bounceOut";

var divStyle={backgroundColor:"white",boxShadow:"0 0 45px rgba(0,0,0,.35)"};
    return (
      <div className={className} style={divStyle} >
              <div className="hd"><div className="c-close-area" onClick={this.handleOnClick}><i className="g-icon-close--green"></i></div></div>
              <div className="bd">
                   {this.state.message}
              </div>
        </div>
    );
  }
});

module.exports = Alert