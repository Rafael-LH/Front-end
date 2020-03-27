const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
 
 const mode = env.NODE_ENV
 let plugins = []
 
 plugins.push(
  new HtmlWebpackPlugin({
   template: './public/index.html', //donde se encuentra el archivo que se encargara el plugin
   filename: './index.html' //Nombre que le quiero dar al file name
  })
 )
 
 if(mode == 'production'){
  plugins.push(
   new MiniCssExtractPlugin({
    filename: './styles.css' //Nombre que le quiero dar al file name
   })
  )
 }

return{
 mode: mode,
 entry: path.resolve(__dirname, './src/index.js'), 
 output:{
  path: path.resolve(__dirname, './dist'), //donde se va guardar despues de compilar que en este caso sera dist
  filename: 'bundle.js' //El nombre que le doy al archivo compilado
 },
 resolve:{
  extensions: ['.js', '.jsx']
 },
 devServer:{
  contentBase: path.resolve(__dirname, '/'),
  port: 9000,
  compress: true
 },
 module:{
  rules:[

    {
     test: /\.(js|jsx)$/,
     exclude: /(node_modules)/,
     use: {
      loader: 'babel-loader'
     },
    },

    {
     test: /\.(html)$/,
     use:[
      {
       loader: 'html-loader'
      }
     ],
    },

    {
     test: /\.s[ac]ss$/i,
     use:[ mode == 'development' ? 'style-loader': MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    },

  ]
 },
  plugins,
 }
}