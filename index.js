'use strict'

/**
 * Trails Policy Class.
 */
module.exports = class TrailsPolicy {
  constructor (app) {
    Object.defineProperty(this, 'app', {
      enumerable: false,
      value: app
    })
  }

  /**
   * Policy configuration
   */
  static config () {
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
