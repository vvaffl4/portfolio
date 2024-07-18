function getPublicPath() {
  return '/portfolio/'
  // switch (process.env.NODE_ENV) {
  //   case 'production': return '/portfolio/'
  //   default: return ''
  // }
}

module.exports = {
  publicPath: getPublicPath()
}