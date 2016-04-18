module.exports = function(browserSync) {
	return {
		files: ['./src/**/*.js'],
		server: {
			baseDir: './',
			routes: {
				'/node_modules': 'node_modules'
			}
		},
		https: true
	}
};