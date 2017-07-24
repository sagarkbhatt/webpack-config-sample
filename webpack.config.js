var path = require( 'path' );
var webpack = require( 'webpack' );

var config = {
 	devtool: 'eval-source-map',
    entry:{
        home: './js/home/main.js',
        customizer:'./js/customizer/main.js',
        base: [ './js/post/main.js',
        './js/page/main.js',
        './js/single/main.js',
        './js/archive/main.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map'
    },
    externals: {
        'jquery' : 'jQuery'
    },
    module: {
	rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
			  loaders: {
			  }
			  // other vue-loader options go here
			}
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
			  name: '[name].[ext]?[hash]'
			}
		}
	]
  	},
	resolve: {
		alias: {
		  'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		noInfo: true
	},
	performance: {
		hints: false
	}
};

module.exports = config;