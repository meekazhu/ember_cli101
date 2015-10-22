import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function(){ //generate friends/index but it doesnt exist in the route
    this.route('new');
  });
});

export default Router;
