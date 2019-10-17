# $ npm install --save-dev @babel/core @babel/cli @babel/preset-env


# $ touch babel.config.js   
# add json configurations to babel.config.js

<!--
const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],
  ];  module.exports = { presets }; 
-->

# $ ./node_modules/.bin/babel input.js -o output.js
