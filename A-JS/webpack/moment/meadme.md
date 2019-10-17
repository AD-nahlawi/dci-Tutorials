
# --------------------------webpack webpack-cli--------------------------
#  1- npm init
# 2- npm install --save-dev webpack webpack-cli
# 3- add "build": "webpack" to package.json inside scripts
# 4- add folder src and inside src add file index.js
# 5- npm run build
# 6- we have to see dist folder and main.js

# ------------------------webpack-plugin html-loader------------------------
# 7- npm install --save-dev html-webpack-plugin html-loader
# 8- create webpack.config.js in the project folder
# 9-  add the module rules and the plugins to webpack.config.js ???
# 10-  create index.html in src folder
# 11-  create hello.js in src and we export some js code
# 12- in index.js: import the js code

# -------------------------------webpack-dev-server---------------------------
# npm install --save-dev  webpack-dev-server
# add "start:dev": "webpack-dev-server" to the scripts Object in package.json
# npm run start:dev

# ---------------------------for Sass----------------------------------------
 # npm install --save -dev node-sass style-loader css-loader sass-loader mini-css-extract-plugin


            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
# add this Object to  webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
# defin this variable at the beginning 
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        }),
# set the variable inside the plugins Array





# --------------------------npm-----file-loader---------------------------------------------
# npm install --save-dev file-loader
