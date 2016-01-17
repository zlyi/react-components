var React = require('react');

var classNames = require('classnames');

 var Modal = React.createClass({
 
  getInitialState: function() { 
    var  modalContent=this.props.modalContent?this.props.modalContent:"内容";
    var modalTitle=this.props.modalTitle?this.props.modalTitle:"标题";
      
    return {isShow: null,modalContent:modalContent,modalTitle:modalTitle};
  },
  closeModal:function(){

    this.setState({
      isShow: false
    }); 
  }, 
  handleOnClick:function(){
     this.closeModal();
  },
componentWillReceiveProps:function(nextProps){
    this.setState({
      isShow: nextProps.isShow
    }); 
    //this.handleOnClick();
},
  render: function() { 
    var isShow=this.state.isShow; 
     var className="";
     if(isShow==null)
     {
       className="dn";
     }else
     { 
           className=classNames('c-cover  animated', { fadeInUp: isShow, fadeOutDown: !isShow }); // => 'foo bar baz quux' 
 
    }
    var maskClass=!isShow?"dn":"g-mask";

    console.log(maskClass);

    return (<div><div className={maskClass} onClick={this.handleOnClick}></div>
        <div className={className}> <div className="hd">{this.state.modalTitle}<div className="c-close-area" onClick={this.handleOnClick}><i className="g-icon-close--gray"></i></div></div>
                  <div className="bd">
                      {this.state.modalContent}
                  </div></div></div>
      );
  }
});
 

module.exports = Modal