'use strict'

/**
 * Trails Policy Class. 
 */
module.exports = class TrailsPolicy {
  constructor (app) {
    this.app = app
    this.api = app.api
    this.log = this.app.log
    this.__ = this.app.__
  }
}
