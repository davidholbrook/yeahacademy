// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/src/pages/index.js")),
  "page-component---src-pages-page-2-js": preferDefault(require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/src/pages/page-2.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/.cache/json/index.json"),
  "page-2.json": require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/.cache/json/page-2.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/dholbrook/Documents/freelance/YEAH Academy/yeahacademy--temp/src/layouts/index"))
}