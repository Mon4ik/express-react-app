const path = require('path');
const glob = require('glob');

let entry = {}
let files = glob.sync('./src/*.jsx');
let filenames = glob.sync('./src/*.jsx').map(filename => path.basename(filename, '.jsx'))

filenames.forEach((filename, i) => {
    entry[filename] = files[i]
})

module.exports = {
    mode: "production",
    entry,
    output: {
        path: path.join(__dirname, '/webpack'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
};