//= require action_cable

this.App = {};


App.cable = ActionCable.createConsumer();


// Create a subscription to the channel that we have created.
App.notifier = App.cable.subscriptions.create('Notifier::NotifierChannel', {  
  // Called when a data comes in.
  received: function(data) {
    console.log(data.data.data);
  },

  // The function that will be responsible to send out notifications
  notify: function(data) {
    this.perform('notify', {
      data: data
    })
  }
});
