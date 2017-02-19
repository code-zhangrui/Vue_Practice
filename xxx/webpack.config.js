module.exports = {
	entry: './app.js',
	watch: true,
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{
				
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			},
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
};
