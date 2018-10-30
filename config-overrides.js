
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
  // antd 按需加载
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'], // change importing css to less
    config,
  );
  // antd-pro 按需加载
  config = injectBabelPlugin(
    ['import', { libraryName: "ant-design-pro", libraryDirectory: "lib", style: true, camel2DashComponentName: false}, "antd-pro"],
    config,
  );

  config = rewireLess.withLoaderOptions({
    //modifyVars: { "@primary-color": "#1DA57A" },
    javascriptEnabled: true, 
    modules: true
  })(config, env);

  // 使用别名
  config.resolve.alias = {
    '@': resolve('src')
  }
  return config;
};