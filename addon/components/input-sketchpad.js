import Ember from 'ember';

export default Ember.Component.extend({

  // Sketchpad optional class
  class: '',

  // width and height of the sketchpad
  width: 0,
  height: 0,

  // Restoration presets
  strokes: [],
  undoHistory: [],

  didInsertElement: function() {
    this.set('value', new Sketchpad({
      element: this.$('canvas'),
      width: this.get('width'),
      height: this.get('height'),
      strokes: this.get('strokes'),
      undoHistory: this.get('undoHistory'),
    }));
  },
});
