//= require action_cable

this.App = {};


App.cable = ActionCable.createConsumer();


// Create a subscription to the channel that we have created.
App.notifier = App.cable.subscriptions.create('Notifier::NotifierChannel', {  
  // Called when a data comes in.
  received: function(data) {
    console.log("testslaskdjfalskd");
    var info = data;
    // NOTE info is an object which has to have a key
    // called message !!!
    console.log(info);
  },

  // The function that will be responsible to send out notifications
  notify: function(data) {
    var formated_data = null;
    // Check to see if a string has been given and if yes
    // convert it to an object
    if(data.constructor === String) {
      formated_data = { message: data }
    } else if(data.constructor === Object) {
      formated_data = data
    }
    this.perform('notify', formated_data)
  }
});
