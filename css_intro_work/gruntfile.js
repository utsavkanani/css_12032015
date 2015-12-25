module.exports = function(grunt) {

grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'compact',
        noCache: true
      },
      files: {                         // Dictionary of files
        'main.css': 'main.scss'       // 'destination': 'source'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);

};
