module.exports = {
  chainWebpack: config => {
    const imagesRule = config.module.rule('images');

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    imagesRule.uses.clear();

    // add replacement loader(s)
    imagesRule
      .use('lqip-loader')
      .options({
        path: '/media',
        base64: true,
        palette: false
      })
      .loader('lqip-loader');
  }
};