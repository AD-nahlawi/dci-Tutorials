const Htmlwebpackplugin=require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
   module:{
       rules:[
           {
               test:/\.html$/,
               use:[
                   {
                       loader:"html-loader",
                       options:{minimize: true}
                   }
               ]
           },

           {
               test:/\.(png|svg|jpg|gif)/,
               use:{
                   loader:"file-loader"
               }
           },
           {
            test:/\.scss$/,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }
       ]
   },
   plugins:[
       new Htmlwebpackplugin({
           template:"./src/index.html",
           filename:"./index.html"
       }),
       new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
   ]
}