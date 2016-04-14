'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  __before: function() {
    console.log(this.http.action + ' 1');
  },
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self) {
    //auto render template file index_index.html
    return self.display();
  },
  joinUsAction: function(self) {
    return self.display();
  },
  aboutUsAction: function(self) {
    return self.display();
  }
});