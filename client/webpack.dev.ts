import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/template.html'
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/entry.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }]
  },

  plugins: [htmlPlugin]
};

export default config;
