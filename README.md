    "build": "parcel build && browserify dist/.cache/ssxh.tmp.js -o dist/ssxh.js",
    "uglify": "uglifyjs dist/ssxh.js --mangle --compress --output dist/ssxh.min.js",