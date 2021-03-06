import Home from './components/home'
import Blog from './components/blog'
import Base from './components/base'
import More from './components/more'
import Contact from './components/contact'
import Project from './components/project'

const routers = [{
  path: '/',
  component: Home
}, {
  path: '/contact',
  component: Contact
}, {
  path: '/more',
  component: More
}, {
  path: '/blog',
  component: Blog,
  children: [{
    path: 'base',
    component: Base
  }]
}, {
  path: '/project',
  component: Project
}
]

export default routers