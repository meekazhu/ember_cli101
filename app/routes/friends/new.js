import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return this.store.createRecord('friend');
    },
    // isValid: Ember.computed(
    //     'model.firstName',
    //     'model.lastName',
    //     'model.email',
    //     'model.twitter',
    //     {
    //         get(){
    //             console.log('[friend route ] model.firstName' + this.get('model'));
    //             return !Ember.isEmpty(this.get('model.firstName'))&&
    //                 !Ember.isEmpty(this.get('model.lastName'))&&
    //                 !Ember.isEmpty(this.get('model.email'))&&
    //                 !Ember.isEmpty(this.get('model.twitter'));
    //         }
    //     }
    // ),
    actions: {
        // save() {
        //     // console.log('isValid ' + this.get('isValid'));
        //     // if (this.get('isValid')) {


        //     //     this.get('model').save().then((friend) => {
        //     //         this.transitionToRoute('friends.show', friend);
        //     //     });
        //     // }
        //     //  else {
        //     //     this.set('errorMessage', 'You have to fill all the fields');
        //     // }
        //     return false;
        // },
        // cancel() {
        //     console.log('+-- cancel action bubbled up to friends new route');
        //     return false;
        // }
    }
});
