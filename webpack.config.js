module.exports = [
	{
		mode: 'production',
		output: {
			filename: 'bundle.js'
		},
		target: [
			'web',
			// IMPORTANT : You can change this config. Choose the oldest browsers you want to support
			'browserslist:> 0.25%, not dead'
		],
		optimization: {
			minimize: true
		},
		module: {
			rules: [
				{
					// First stage to polyfill your own code
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							comments: false,
							presets: [
								[
									'@babel/preset-env',
									{
										corejs: '^3.6.3',
										bugfixes: true,
										targets: "> 0.25%, not dead",
										useBuiltIns: 'usage'
									}
								]
							]
						}
					}
				}
			]
		}
	}
];
