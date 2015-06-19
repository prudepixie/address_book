# address_book
 Address book built in angular through rails, where I am familiar with its file structure.
 The root is set to contacts.html template as default, where it uses the sole contacts controller.
 The search function is achieved with a filter, I originally wanted to use angular-advanced-searchbox, but 
decided to keep it simple. 
 The edit modal toggles out with ng-show and back out with ng-click. 
 
 To set up the app:
1. bundle install
2. rake db:migrate
3. rails s 
4. Live code http://localhost:3000/
