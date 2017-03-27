# Notifier
Short description and motivation.

## Installation
Add this line to your application's Gemfile:

```ruby
gem 'notifier'
```

And then execute:
```bash
$ bundle
```
Add the notifier to the assets:
```javascript
# app/assets/javascripts/application.js

//= require notifier
```

```css
# app/assets/stylesheets/application.css

*= require notifier
```

## Usage
Notification can now be called either form the client (JS) or the server (ruby)

### First configure and mount actioncable as per your needs.

# Invoking the notification from the client:

  > In any of your js files
  ```javascript
    $("#payment").on('click', function() {
      Notifier.notify({message: "Payment Button Clicked !!", css: 'text-danger'})
    });
  ```
# Invoking the notification from the server:

  > Lets say you have a long running background job, and you can notify the user
    that it is complete by :

  ```ruby
    Class LongRunningJob < ApplicationJob
      queue: 'my-long-running-job'

      before_enqueue do |job|
        Notifier.notify({ message: "Started Job #{job.class.class_name}", css: 'text-info' })
      end

      def perform
        ...
      end

      def after_perform do |job|
        Notifier.notify({ message: "Job #{job.class.class_name} completed !", css: 'text-success' })
      end
    end
  ```
  or

  ```bash
  rails c
  Notifier.notify({ message: "Notification from the console !!!" })
  ```

  #### NOTE for the above implementation to work we need to configure ActionCable to use redis adapter.

  Please refer available methods that you can pass as a notification

# The notification Object

```ruby
{
  message: "This actual body of you notification",
  css: "A separated list of classes that will be applied on the notification"
  onClick: "Takes a function that will be executed when you click the notification" (Defaults to close the notification)
}
```

## Contributing
1. Fork the project.
2. git checkout -b my-awesome-tweak
3. Add tests that support your changes.
4. Submit Pull request.

## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
