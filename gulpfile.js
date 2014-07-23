var gulp = require('gulp'), 
	watch = require('gulp-watch'), 
	concat = require('gulp-concat'), 
	stylus = require('gulp-stylus'), 
	coffee = require('gulp-coffee'), 
	jade = require('gulp-jade'), 
	bower = require('gulp-bower'), 
	wrap = require('gulp-wrap-amd'), 
    myth = require('gulp-myth'), 
	notify = require('gulp-notify'), 
	rjs = require('gulp-requirejs'), 
	uglify = require('gulp-uglify'), 
	prettify = require('gulp-prettify'), 
	imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'), 
	spritesmith = require('gulp.spritesmith');

gulp.task('stylus', function() {
    gulp.src('assets/styles/style.styl')
    .pipe(stylus()) 
    .on('error', console.log) 
    .pipe(myth())
    .pipe(gulp.dest('public/css/'));
});	

gulp.task('jade', function() {
    gulp.src(['assets/templates/*.jade'])
    .pipe(jade({client: false}))  
    .on('error', console.log) 
    .pipe(prettify({indentSize: 4}))   
    .pipe(gulp.dest('')) 
});

gulp.task('fonts', function(){
    gulp.src('assets/fonts/**/*')
    .on('error', console.log) 
    .pipe(gulp.dest('public/css/fonts/'))
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('assets/img/sprite/*.*') 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.styl',
                cssFormat: 'stylus',
                algorithm: 'binary-tree',
                cssTemplate: 'assets/sprites.template.mustache',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
            }));
    spriteData.img.pipe(gulp.dest('public/img/')); 
    spriteData.css.pipe(gulp.dest('assets/styles/common/')); 
});

gulp.task('images',  function() {
    gulp.src('assets/img/**/*')
    .pipe(imagemin({
        progressive: true, 
        svgoPlugins: [{removeViewBox: false }],
        use: [ pngcrush() ]
    })) 
    .on('error', console.log) 
    .pipe(gulp.dest('public/img/'))
});  

gulp.task('coffee', ['bower'] , function() {
    return stream = gulp.src('assets/js/**/*.coffee')
    .pipe(coffee({
        bare: true
    }))
    .on('error', console.log) 
    .pipe(gulp.dest('public/js/'))
}); 

gulp.task('bower', function() {
    return bower('assets/js/libs/')
    .on('error', console.log) 
    .pipe(gulp.dest('public/js/libs/'))
}); 

gulp.task('build', ['stylus', 'jade', 'fonts', 'sprite', 'images', 'coffee', 'bower']);

gulp.task('watch', [ 'build' ], function() {
    gulp.watch('assets/styles/**/*.styl', [ 'stylus' ]);
    gulp.watch('assets/js/**/*.coffee', [ 'coffee' ]);
    gulp.watch('assets/img/**/*', [ 'images' ]);
    gulp.watch('assets/fonts/**/*', [ 'fonts' ]);
    gulp.watch('assets/templates/**/*', [ 'jade' ]);
});

gulp.task('default', ['watch']);