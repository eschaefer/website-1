const pkg = require("./package.json")

module.exports = {
  root: "./docs",
  title: "Hyperapp documentation",
  gitbook: "3.2.2",
  plugins: ["edit-link", "prism", "-highlight", "github", "anchorjs"],
  variables: {
    version: pkg.version
  },
  pluginsConfig: {
    "edit-link": {
      base: "https://github.com/hyperapp/hyperapp/tree/master/docs",
      label: "Edit This Page"
    },
    github: {
      url: "https://github.com/hyperapp/hyperapp/"
    }
  }
}
