# sass-inline-image

`npm i sass-inline-image`

Use the `inline-image` function from Compass in [gulp-sass](https://www.npmjs.com/package/gulp-sass) ([node-sass](https://www.npmjs.com/package/node-sass)).

## usage

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

## Credit

Credit to [Sergii Iavorskyi](https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass) at [coderwall](https://coderwall.com/).

Credit to [Joseph Clay](https://github.com/JosephClay/sass-inline-image) for the original implementation.

## License

See [license.md](./licence.md).
