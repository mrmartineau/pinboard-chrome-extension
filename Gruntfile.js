module.exports = function (grunt) {

	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: require('./package'), // <%=pkg.name%>

		/**
		 * Config - Edit this section
		 * ==========================
		 * Choose javascript dist filename
		 * Choose javascript dist location
		 * Choose javascript files to be uglified
		 */
		config : {
			scss : {
				cssFile : 'inject' // <%=config.scss.cssFile%>
			}
		},


		/**
		 * Sass compilation using grunt-sass
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Includes kickoff.scss and kickoff-old-ie.scss by default
		 * Also creates source maps
		 */
		sass: {
			pb: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8
				},
				files: {
					'src/inject/<%=config.scss.cssFile%>.css' : 'scss/<%=config.scss.cssFile%>.scss'
				}
			}
		},

		watch: {
			scss: {
				files: ['scss/*.scss'],
				tasks: ['sass:pb']
			}
		}
	});

	// Load grunt configurations automatically
	require('load-grunt-tasks')(grunt);



	/**
	* GRUNT * Default task
	* run uglify, sass:kickoff and autoprefixer
	*/
	grunt.registerTask('default', [
		'sass:pb'
	]);
};
