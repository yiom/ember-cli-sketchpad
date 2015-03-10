# ember-cli-sketchpad

An Ember.js addon to include a simple sketchpad based on [sketchpad library](https://github.com/yiom/sketchpad/).

[![NPM](https://nodei.co/npm/ember-cli-sketchpad.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ember-cli-sketchpad/)

## Instalation
To install Sketchpad via [NPM](https://npmjs.com):
```
$ npm install ember-cli-sketchpad --save-dev
```

## Usage

Just add the following component to your application:
```
{{input-sketchpad width=400 height=400 value=sketchpad class="sketchpad"}}
```
After that, you should be able to access your sketchpad with the variable you
used on the 'value' field
```
export default Ember.Controller.extend({
  actions: {
    undo: function(sketchpad) {
      this.get('sketchpad').undo();
    },
    redo: function(sketchpad) {
      this.get('sketchpad').redo();
    },
  },
});
```
The Sketchpad Object API follows the same as the [sketchpad library](https://github.com/yiom/sketchpad/).
