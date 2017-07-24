var path = require( 'path' );
var webpack = require( 'webpack' );

var config = {
	devtool: 'source-map',
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
	}
};

module.exports = config;