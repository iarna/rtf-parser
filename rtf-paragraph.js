'use strict'

class RTFParagraph {
  constructor (opts) {
    if (!opts) opts = {}
    this.value = '\n'
    this.style = opts.style || {}
    this.content = []
  }
}

module.exports = RTFParagraph
