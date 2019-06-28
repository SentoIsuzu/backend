const { override, fixBabelImports,addBabelPlugin } = require('customize-cra');
module.exports = override(
  addBabelPlugin('react-hot-loader/babel'),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
