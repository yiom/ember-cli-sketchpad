import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    undo: function(sketchpad) {
      sketchpad.undo();
    },
    redo: function(sketchpad) {
      sketchpad.redo();
    },
  },
});
