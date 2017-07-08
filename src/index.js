import { h, app } from "hyperapp"
import "./index.css"

const main = (p, c) => h("main", p, c)
const svg = (p, c) => h("svg", p, c)
const icon = href => svg({}, use(href))
const h1 = (p, c) => h("h1", p, c)
const span = (p, c) => h("span", p, c)
const link = (p, c) => h("a", p, c)
const button = (p, c) => h("button", p, c)
const use = href =>
  h("use", {
    oncreate: e => {
      console.log(e)
      e.setAttributeNS("http://www.w3.org/1999/xlink", "href", href)
    }
  })

app({
  state: {},
  actions: {},
  events: {
    loaded: (s, a) => {}
  },
  view: (s, a) =>
    main({}, [
      icon("#icon-hyperapp"),
      h1({}, "1 KB JavaScript library for building frontend applications"),
      link({ href: "https://github.com/hyperapp/hyperapp" }, [
        icon("#icon-github"),
        span({}, "GITHUB REPOSITORY")
      ])
    ])
})
