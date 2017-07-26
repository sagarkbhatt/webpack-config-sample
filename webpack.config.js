const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
});
const WebpackCleanupPlugin = require( 'webpack-cleanup-plugin' );
module.exports = {
 	devtool: 'source-map',
    entry:{
        home: './js/home/main.js',
        customizer:'./js/customizer/main.js',
        base: [ './js/post/main.js',
        './js/page/main.js',
        './js/single/main.js',
        './js/archive/main.js',
		'./js/default/main.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].[hash].bundle.js',
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
		},
		{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
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
	},
	plugins: [
		extractSass,
		new WebpackCleanupPlugin(),
		//   new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		// 	'window.jQuery': 'jquery'
		// }),
	]
};
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'dev-test') {
	module.exports.devtool = 'source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
		  'process.env': {
			NODE_ENV: '"production"'
		  }
		}),
		new webpack.optimize.UglifyJsPlugin({
		  sourceMap: true,
		  compress: {
			warnings: false
		  }
		}),
		new webpack.LoaderOptionsPlugin({
		  minimize: true
		})
	])
}