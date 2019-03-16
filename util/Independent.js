
class Independent {
  static getGoldenHeight (width) {
    return Math.round(width * 0.618)
  }
}

Object.freeze(Independent)
module.exports = Independent
