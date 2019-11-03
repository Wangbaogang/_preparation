const path = require('path')
const del = require('del')
const {src, dest, watch, series, parallel} = require('gulp')

const SRC = "src"
const DIST = process.argv[2] == "g" ? "dev" : "build"
const SRC_PATH = path.resolve(__dirname, SRC)
const DIST_PATH = path.resolve(__dirname, DIST)

function dev() {
    const source = ["src/**/*.js", "src/**/*.html"]
    del(DIST_PATH, {
        force: true
    })
    return watch(source, {}, function() {
        console.log("watch arguments", arguments)
        return src(source)
            .pipe(dest(DIST_PATH))                    
    })
}

function build() {
    return
}
exports.dev = dev
exports.build = build