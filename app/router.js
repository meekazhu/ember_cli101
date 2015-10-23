import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function(){
    //generate friends/index but it doesnt exist in the route
    this.route('new');

    this.route('show', {
      path: ':friend_id'
    }, function(){
        this.route('articles', {resetNamespace:true}, function() {
          this.route('new', {});
        });
    });

    this.route('list', {});

    this.route('edit', {
      path: ':friend_id/edit'
    });
  });

});

export default Router;
