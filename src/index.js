import { h, app } from 'hyperapp'
import './index.css'

const main = (p,c) => h('main', p, c)
const svg = (p,c) => h('svg', p, c)
const use = (p,c) => h('use', p, c)
const icon = href => svg({}, use({ href }))
const h1 = (p,c) => h('h1', p, c)
const span = (p,c) => h('span', p, c)
const link = (p,c) => h('a', p, c)
const button = (p,c) => h('button', p, c)

app({
  state: 0,
  actions: {
    setState: (s,a,d) => d
  },
  events: {
    loaded: (s,a) =>
      fetch('https://api.github.com/repos/hyperapp/hyperapp')
      .then(x => x.json())
      .then(a.setState),
  },
  view: (s,a) =>
    main({},[
      icon('#icon-hyperapp'),
      h1({}, '1KB functional frontend framework'),
      link({ href: 'https://github.com/hyperapp/hyperapp' },[
        icon('#icon-github'),
        span({}, 'GITHUB REPOSITORY'),
      ]),
    ])
})
