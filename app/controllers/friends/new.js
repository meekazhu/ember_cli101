// import Ember from 'ember';
import FriendsBaseController from './base';

export default FriendsBaseController.extend({
    actions:{
        close: function(){
            this.transitionToRoute('friends.index');
            return false;
        }
    }
});
