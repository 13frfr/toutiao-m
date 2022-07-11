// postcss.config.js
module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browers: ['Android>=4.0', 'iOS>=8'],
    // },

    //px=>rem
    'postcss-pxtorem': {
      //   rootValue: 37.5,
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      //*表示所有
      propList: ['*'],
    },
  },
}
