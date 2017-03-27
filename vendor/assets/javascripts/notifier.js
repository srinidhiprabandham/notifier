//= require action_cable
//= require_tree .

this.App = {};
this.Notifier = {};


App.cable = ActionCable.createConsumer();


// Create a subscription to the channel that we have created.
App.notifier = App.cable.subscriptions.create('Notifier::NotifierChannel', {  
  // Called when a data comes in.
  received: function(data) {
    var info = data;
    // NOTE info is an object which has to have a key
    // called message !!!
    content = "<div class='note'>";
    content += data.message;
    content += "</div>"
    
    document.body.innerHTML += content
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


// Convenience method that unifies call to broadcast b/w Server and Client
Notifier.notify = function(data) {
  return App.notifier.notify(data);
};
