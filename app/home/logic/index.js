'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
module.exports = think.logic({
  __before: function() {
    console.log(this.http.action);
  },
  /**
   * index action logic
   * @return {} []
   */
  indexAction: function() {
  }
});