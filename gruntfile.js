module.exports = function (grunt){

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON( 'package.json' ),

            clean: ["dist", '.tmp'],

            jshint: {
                all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
                options: {
                    globals: {
                        _: false,
                        $: false,
                        jasmine: false,
                        describe: false,
                        it: false,
                        expect: false,
                        beforeEach: false,
                        afterEach: false,
                        sinon: false
                    },
                    browser: true,
                    devel: true
                }
            },
            watch: {
                all: {
                    files: ['src/**/*.js', 'test/**/*.js'],
                    tasks: ['jshint']
                }
            },
            jquery: {
                dist: {
                    output: "lib/jquery",
                    versions: ["2.0.0", "1.10.0", "1.9.0", "1.8.0"]
                }
            },
            bootstrap: {
                dest: 'out',
                js: [
                    'bootstrap-modal.js'
                ],
                css: [
                    'modals.less'
                ]
            },
            nodemon: {
                dev: {
                    script: 'server.js'
                }
            },

        }
    );


    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks('grunt-jquery-builder');
    grunt.loadNpmTasks('grunt-bootstrap');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask(
        'adjustBuiltLinks', 'Performing Final Cleanups', function (){

            var indexDist = 'index.html';

            grunt.log.writeln( 'Performing Final Cleanups' );

            var indexContent = grunt.file.read( indexDist );


        }
    );


    grunt.registerTask( 'default', ['jshint', 'jquery'] );

};
