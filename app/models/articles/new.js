import DS from 'ember-data';

export default DS.Model.extend({
  model(){
    return this.store.createRecord('article', {
        state: 'borrowed',
        friend: this.modelFor('friends/show')
    });
  },
  actions:{
    save(){
        var model = this.modelFor('articles/new');

        model.save().then(()=>{
            this.transitionTo('articles');
        })
    },
    cancel(){
        this.transitionTo('articles');

    }
  }
});
