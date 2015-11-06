'use strict'

let gulp        = require('gulp'),
    harp        = require('harp'),
    browserSync = require('browser-sync'),
    notifier    = require('node-notifier'),
    plugins     = require('gulp-load-plugins')(),
    files       = require('./config/files')

/*
 * Catch errors and output them in the console.
 */
const catchError = function(err) {

	let msg = null

	// Detect the type of error
	if (err instanceof Error) msg = err.toString()
	else                      msg = err

	// Remove ANSI colors and styles
	msg = msg.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')

	// Inform the user
	notifier.notify({
		title   : 'Error',
		message : msg
	})

	// Output error
	console.error(err.toString())

	// Stop gulp pipelines
	this.emit('end')

}

/*
 * Convert JSX and ES2015 to ES5 using Babel.
 */
const babel = function() {

	return gulp.src(files.scripts.src)
	           .pipe(plugins.sourcemaps.init())
	           .pipe(plugins.babel())
	           .on('error', catchError)
	           .pipe(plugins.sourcemaps.write())
	           .pipe(gulp.dest(files.scripts.dist))

}

/*
 * Compile to static files.
 */
const build = function() {

	// Compile to static files
	harp.compile(__dirname, files.dist, (err) => {

		if (err!=null) {
			catchError(err)
			return false
		}

		return true

	})

}

/*
 * Default task, running gulp will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
const serve = function() {

	let port = process.env.PORT || 9000

	harp.server(__dirname, { port }, (err) => {

		if (err!=null) {
			catchError(err)
			return false
		}

		browserSync({
			proxy     : 'localhost:' + port,
			port      : port,
			open      : true,
			notify    : false,
			ghostMode : false
		})

		// Watch for scss changes, tell BrowserSync to refresh main.css
		gulp.watch([files.styles.src], () => browserSync.reload(files.styles.dist, { stream: true }))

		// Watch for js changes
		gulp.watch([files.scripts.src], ['babel', browserSync.reload])

		// Watch for all other changes, reload the whole page
		gulp.watch([files.harp, files.data, files.templates, files.images], browserSync.reload)

	})

}

/*
 * Make tasks available via the CLI.
 */
gulp.task('babel', babel)
gulp.task('export', ['babel'], build)
gulp.task('default', ['babel'], serve)