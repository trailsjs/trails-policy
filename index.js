'use strict'

/**
 * Trails Policy Class. 
 */
module.exports = class TrailsPolicy {
  constructor (app) {
    this.app = app
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
