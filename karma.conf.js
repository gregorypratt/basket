module.exports = function(config) {
	config.set({
		frameworks: ['mocha', 'chai', 'riot'],
		files: [
			'node_modules/jquery/dist/jquery.min.js',
			'client/riotcontrol.js',
			'client/js/**/*',
			'client/tags/**/*',
			'client/test/**/*'
		],
		preprocessors: {
			'client/tags/**/*': ['riot']
		},
		riotPreprocessor: {
			options: {
				type: 'es6'
			}
		},
		browsers: ['PhantomJS'],
		reporters: ['mocha'],
		singleRun: true
	});
};
