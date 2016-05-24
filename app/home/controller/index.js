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
  introAction: function(self) {
    return self.display();
  },
  contactAction: function(self) {
    return self.display();
  },
  jobAction: function(self) {
    return self.display();
  }
});