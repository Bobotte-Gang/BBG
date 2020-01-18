import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/template.html',
  filename: './template.html'
});

// basically transpiles ts&tsx into regular js and yeets it into dist/bundle.js
const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/entry.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [htmlPlugin]
};

export default config;
