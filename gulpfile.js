// Load plugins
var gulp			= require( 'gulp' );

// Plugins related to styles
var sass			= require( 'gulp-sass' );
var autoprefixer	= require( 'gulp-autoprefixer' );
var combineMq		= require( 'gulp-combine-mq' ); // Combine media queries



// Plugin to Notify after task completed
var notify			= require( 'gulp-notify' ); // Notify after completing tasks


// Plugins to Check text domain
var checktextdomain = require( 'gulp-checktextdomain' ); //Check textdomain



// Plugins related to language translation
var wpPot			= require( 'gulp-wp-pot' );
var sort			= require( 'gulp-sort' ); // Recommended to prevent unnecessary changes in pot-file.


// Plugins to watch tasks
var watch			= require( 'gulp-watch' );


// Browsers you care about for autoprefixing.
var autoprefixer_browsers = ['last 2 versions', 'ie 9', 'ios 6', 'android 4'];


// Styles
gulp.task( 'sass', function() {
  return gulp.src( './sass/*.scss' )
	.pipe( sass.sync().on( 'error', sass.logError ) )
	.pipe( autoprefixer( autoprefixer_browsers ) )
	.pipe( gulp.dest( '.' ) )
	.pipe( notify( {
		message: 'TASK: "sass" Completed!',
		onLast: true
	} ) );
} );


// Checktextdomain in php files
gulp.task( 'checktextdomain', function() {
    return gulp
    .src( ['**/*.php', './*.php', '!./node_modules/**'] )
    .pipe( checktextdomain( {
        text_domain: 'blank_theme', // Specify allowed domain(s)
        keywords: [ // List keyword specifications
			'__:1,2d',
			'_e:1,2d',
			'_x:1,2c,3d',
			'esc_html__:1,2d',
			'esc_html_e:1,2d',
			'esc_html_x:1,2c,3d',
			'esc_attr__:1,2d',
			'esc_attr_e:1,2d',
			'esc_attr_x:1,2c,3d',
			'_ex:1,2c,3d',
			'_n:1,2,4d',
			'_nx:1,2,4c,5d',
			'_n_noop:1,2,3d',
			'_nx_noop:1,2,3c,4d'
		]
    } ) )
	.pipe( notify( {
		message: 'TASK: "checktextdomain" Completed!',
		onLast: true
	} ) );
} );


// POT file generations
gulp.task( 'makepot', function() {
	return gulp.src( ['**/*.php', './*.php'] )
	.pipe( sort() )
	.pipe( wpPot( {
		domain: 'blank_theme',
		destFile: 'blank_theme.pot',
		package: 'blank_theme',
		bugReport: 'https://rtcamp.com/contact/',
		lastTranslator: 'Team <support@rtcamp.com>',
		team: 'Team <support@rtcamp.com>'
	} ) )
   .pipe( gulp.dest( './languages/blank_theme.pot' ) )
   .pipe( notify( {
	   message: 'TASK: "makepot" Completed!',
	   onLast: true
   } ) );
} );

// Watch tasks
gulp.task( 'watch', function() {
	gulp.watch( './sass/**/*.{scss,sass}', ['sass'] );
} );


// Default tasks
// gulp.task('default', ['sass','checktextdomain','makepot','watch']);
gulp.task( 'default', ['checktextdomain', 'makepot', 'watch'] );