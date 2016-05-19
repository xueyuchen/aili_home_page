/**
 * Created by cxy on 16/5/19.
 */
'use strict';
/**
 * 360网站管理员认证
 * @type {*|exports|module.exports}
 */
var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self) {
    //auto render template file index_index.html
    return self.display();
  }
});