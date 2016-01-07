var React = require('react');

 var Toast = React.createClass({
 
  getInitialState: function() { 
    var  messageValue=this.props.message?this.props.message:"成功";
    var  durationValue=this.props.message?this.props.duration:2000;
  
    return {isShow: null,message:messageValue,duration:durationValue};
  },
  closeToast:function(){
    var self=this;
    setTimeout(function() {
      if(self.state.isShow!=null){ 
        self.setState({
          isShow: false
        }); 
       }
      }, this.state.duration);
  }, 
componentWillReceiveProps:function(nextProps){
    this.setState({
      isShow: nextProps.isShow
    }); 
 this.closeToast();
},
  render: function() { 
    var isShow=this.state.isShow; 
     var className="";
     if(isShow==null)
     {
       className="dn";

     }else
     { 
       className= isShow ?"toast-inner animated bounceIn":"toast-inner animated bounceOut";
    }

var divStyle={backgroundColor:"white",boxShadow:"0 0 45px rgba(0,0,0,.35)"};
    return (
      <div class="g-toast">
             <div className={className} style={divStyle} >{this.state.message}</div>
        </div> 
    );
  }
});
 

module.exports = Toast