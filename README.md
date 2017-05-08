# sass-inline-image

`npm i sass-inline-image`

Use the `inline-image` function from Compass in [node-sass](https://www.npmjs.com/package/node-sass).

# Examples

## gulp

```js
// in gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassInlineImage = require('sass-inline-image');
gulp.src('style.scss')
    .pipe(
        sass({
            functions: sassInlineImage({ /* options */ })
        })
    )
    .pipe(gulp.dest('./css'));
```

```scss
body {
    background: inline-image('path/to/image.png');
}
```

## ember-cli

```js
// In ember-cli-build.js
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var sassInlineImage = require('sass-inline-image');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      functions: sassInlineImage({ base: 'public/assets/images' })
    }
  });

  return app.toTree();
};
```

```scss
body {
    background: inline-image('path/to/figure.svg');
}
```

## Credit

Credit to [Sergii Iavorskyi](https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass) at [coderwall](https://coderwall.com/).

Credit to [Joseph Clay](https://github.com/JosephClay/sass-inline-image) for the original implementation.

## License

See [license.md](./licence.md).
