const {
  override,
  addBabelPlugin,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');
const Merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");
const env = process.env.NODE_ENV;
const addImportAnt = libraryName =>
  fixBabelImports(libraryName, {
    libraryName,
    libraryDirectory: 'es',
    style: true,
  });

module.exports = override(
  addBabelPlugin('react-hot-loader/babel'),
  addImportAnt('antd'),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  addWebpackAlias({        
    ["@src"]: path.resolve(__dirname, "./src"),        
    ["@util"]: path.resolve(__dirname, "./src/util"),        
    ["@components"]: path.resolve(__dirname, "./src/components"),
    ["@assets"]: path.resolve(__dirname, "./src/assets"),  
}),
  // 自定义更改
  config => {
    // 添加ts代码审查
    //const forkTsCheckerWebpackPlugin = config.plugins[config.plugins.length - 1];
    //forkTsCheckerWebpackPlugin.tslint = './tslint.json';
    //forkTsCheckerWebpackPlugin.tslintVersion = require('tslint').Linter.VERSION;
    if (env === 'production') {
      config = Merge(config, {
        devtool: false,
        optimization: {
          // 压缩代码
          minimizer: [
            new UglifyJsPlugin({
              cache: true, // 启用文件缓存
              parallel: true, // 使用多线程
              uglifyOptions: {
                compress: {
                  drop_console: true, // 删除console语句
                  collapse_vars: true, // 内嵌定义了但是只有用到一次的变量
                  reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
                },
              },
            }),
          ],
        },
      });
    }
   /*  require('react-app-rewire-postcss')(config, {
      plugins: loader => [
        require('autoprefixer')({
          autoprefixer: {
            browsers: ['last 2 versions', 'iOS >= 8'] 
          },
        }),
      ],
    }); */
    return config;
  }
);
