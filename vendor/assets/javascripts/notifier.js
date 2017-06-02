//= require jquery-3.2.1.min
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
    content = "<div class='notifier-note'>";
      content += "<div class=" + data.css + ">";
        if(data.icon != undefined){
          content += "<div class=content-icon>";
            content += "<i class=" + data.icon + "></i>";
          content += "</div>";
        }
        content += "<div class='content-body'>";
            content += data.message;
        content += "</div>";
      content += "</div>";
    content += "</div>";
    
   $("body").prepend(content);
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

// hide note after 4 seconds by default.
// Should not be mutating jquery like this. But for now
// can't think of any other solution.
$(document).on('DOMNodeInserted', function(e) {
  if ( $(e.target).hasClass('notifier-note') ) {
    $(e.target).delay(4000).fadeOut('slow');
  }
});

$(document).on('click','.notifier-note', function() {
  $(this).fadeOut('slow').remove();
});
