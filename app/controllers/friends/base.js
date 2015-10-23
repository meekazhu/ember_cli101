import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed(
        'model.firstName',
        'model.lastName',
        'model.email',
        'model.twitter',
        {
            get(){
                console.log('[friend controller ] model.firstName' + this.get('model'));

                return !Ember.isEmpty(this.get('model.firstName'))&&
                    !Ember.isEmpty(this.get('model.lastName'))&&
                    !Ember.isEmpty(this.get('model.email'))&&
                    !Ember.isEmpty(this.get('model.twitter'));
            }
        }
    ),
    actions:{
        save:function(){
            console.log('in friends new controllers ' + this.get('isValid'));
            if (this.get('isValid')) {
                this.get('model').save().then((friend) => {
                    this.transitionToRoute('friends.show', friend);
                });
                this.set('errorMessage','');
            }
             else {
                this.set('errorMessage', 'You have to fill all the fields');
            }
            return false;
            // return true;
        },
        close: function(){
            console.log('+- cancel action in friends new controller');
            return true;
            // return false;
        }
    }
});
