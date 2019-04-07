const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const ROOT_PATH = path.resolve(__dirname);

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'material-ui-split-button': path.resolve(ROOT_PATH, 'src/index.js'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js',
    library: 'MaterialUiSplitButton',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      'prop-types': {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types',
        root: 'PropTypes',
      },
    },
    '@material-ui/core',
    /@material-ui\/core\/*./,
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEV__: false,
    }),
  ],
});
