'use strict'

/**
 * Trails Policy Class. 
 */
module.exports = class TrailsPolicy {
  constructor (app) {
    this.app = app
    this.api = app.api
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.__
  }
}
