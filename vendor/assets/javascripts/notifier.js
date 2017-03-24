//= require action_cable

this.App = {};


App.cable = ActionCable.createConsumer();


App.messages = App.cable.subscriptions.create('Notifier::NotifierChannel', {  
  received: function(data) {
    console.log(data.data.data);
  },

  notify: function(data) {
    this.perform('notify', { 
      data: data
    })
  }

});
