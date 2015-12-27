var React = require('react');

 var Toast = React.createClass({
 
  getInitialState: function() { 
    var  messageValue=this.props.message?this.props.message:"成功"; 
  
    return {isShow: null,message:messageValue};
  },
  handleOnClick:function(){
    var self=this;  
        self.setState({
          isShow: false
        });  
  }, 
componentWillReceiveProps:function(nextProps){
    this.setState({
       isShow: nextProps.isShow
    });  
},
  render: function() { 
    var isShow=this.state.isShow; 
     var className="";
     if(isShow==null)
     {
       className="dn";

     }else
     { 
       className= isShow ?"c-alert animated bounceIn":"c-alert animated bounceOut";
    }

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
 

module.exports = Toast