
// https://github.com/GoogleChromeLabs/worker-plugin
const WorkerPlugin = require('worker-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new WorkerPlugin()
    ]
  },
  chainWebpack: config => {
    // https://github.com/trivago/pbf-loader
    config.module
      .rule('protobuf')
      .test(/\.proto$/)
      .use('pbf-loader')
        .loader('pbf-loader')
        .end()
  }
}