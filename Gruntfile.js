module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		//uglify
		uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js: {
				files: [{
					cwd: 'static/js/',
					expand: true,
					src: '*.js',
					dest: 'public/js/min/'
				}]
			}
		},
		//sass
		sass: {
			build: {
				files: [{
					src: 'static/css/style.scss',
					dest: 'public/css/style.css'
				}]
			}
        },
        //watch
        watch: {
            css: {
              files: ['static/css/*.scss'],
              tasks: ['sass']
            },
            js: {
              files: ['static/js/*.js'],
              tasks: ['uglify']
            }
        }
	});

	// loadNpmTasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

	// Run Default task(s).
	grunt.registerTask('default', ['uglify', 'sass']);
};