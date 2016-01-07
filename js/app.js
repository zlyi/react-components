'use strict';

require('../css/style.css');

 
var Toast = require('../components/toast/index');

var Alert = require('../components/alert/index');

var Switch = require('../components/switch/index');

var Radio = require('../components/radio/index');

var Modal = require('../components/modal/index');


 var React = require('react');

  var App = React.createClass({
  
   getInitialState:function() {
    return { alertIsShow: null ,toastIsShow:null,modalIsShow:null};
  },
    showAlert:function(evt){
    	 evt&&evt.preventDefault();

    this.updateState({
      alertIsShow: true
    }); 
      },
  showToast:function(evt) {
  	      evt&&evt.preventDefault();
 
   this.updateState({
      toastIsShow: true
    });
  },   
  showModal:function(evt) {
          evt&&evt.preventDefault();
 
   this.updateState({
      modalIsShow: true
    });
  }, 
  updateState:function(newState){ 

     var defaultState={alertIsShow:null,toastIsShow:null,modalIsShow:null};

     Object.assign(defaultState, newState);

     this.setState(defaultState);   
 
  },

  render: function() { 
     return (
      <div>
             <div onClick={this.showAlert}>Alert</div>
            <div  onClick={this.showToast}>Toast</div> 
            <div  onClick={this.showModal}>Modal</div> 

  <Alert isShow={this.state.alertIsShow} message="警告"  /><br/><br/>

             <Toast isShow={this.state.toastIsShow} message="提示"  duration="2000" /><br/><br/>
 
        <Radio isSelected="false"/>

        <Switch isSelected="false"/>

        <Modal isShow={this.state.modalIsShow}/>
        </div> 
    );
  }
});

      React.render(
          <App/>,
        document.body
      );
 