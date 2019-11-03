const { src, dest, series, parallel, watch } = require("gulp")
const template = require("gulp-template")
const del = require("del")
const path = require("path")

const SRC_DIR = "src"
const IS_DEV = process.env.BUILD_ENV === "dev"
const DIST_DIR = IS_DEV ? "dev" : "build"
const SRC_PATH = path.resolve(__dirname, SRC_DIR)
const DIST_PATH = path.resolve(__dirname, DIST_DIR)

function clean() {
    return del(DIST_PATH, {
        force: true
    })
} 

function copy() {
    const htmlFile = `${SRC_DIR}/**/*.html`
    const jsFile = `${SRC_DIR}/**/*.js`
    return src([htmlFile, jsFile])
        .pipe(dest(DIST_PATH))
}

function copyLib() {
    const libjsFile = "libs/**/*.js"
    return src(libjsFile)
        .pipe(dest(path.join(DIST_PATH, 'libs')))
}

function watchCopy() {
    const htmlFile = `${SRC_DIR}/**/*.html`
    const jsFile = `${SRC_DIR}/**/*.js`
    return watch([htmlFile, jsFile], () => {
        copy()
        indexHtml()
    })
}

function indexHtml() {
    const htmlFile = './index.html'
    return src(htmlFile)
        .pipe(template({
            IS_DEV: IS_DEV
        }, {
            interpolate: /{{(.+?)}}/gs
        }))
        .pipe(dest(DIST_PATH))
}

exports.dev = series(
    clean,
    copy,
    copyLib,
    indexHtml,
    watchCopy
)
exports.build = series(
    clean,
    copy,
    copyLib,
    indexHtml,
    watchCopy
)
