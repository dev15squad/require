module.exports = function(grunt) {
  grunt.initConfig({
 	pkg: grunt.file.readJSON('package.json'), // the package file to use
	jshint: {
		// You get to make the name
		// The paths tell JSHint which files to validate
		tests : ['src/*.js', 'tests/*.js'],
		src : ['src/*.js', 'tests/*.js']
	},
    	qunit: {
      		all: ['tests/*.html']
    	},
	 watch: {
    		files: [
			'tests/*.js', 
			'tests/*.html', 
			'specs/*.js', 
			'src/*.js'
			],
    		tasks: ['jasmine', 'sync:main' ]
  	},
	sync: {
		main: {
			files: [{
			  src: [ 'src/**' ],
			  dest: 'bin/',
			}]
		}
	},
	jasmine : {
		src : 'src/**/*.js',
		options : {
			specs : 'specs/**/*.js'
		}
	}

  });

grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-sync');
grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.registerTask('default', ['qunit']);
grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);
grunt.registerTask('default', 'jasmine');


};

