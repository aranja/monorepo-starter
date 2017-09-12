import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from '../../routes/Home'
import About from '../../routes/About'

const Layout = () => (
  <div>
    <Helmet titleTemplate="%s | Starter">
      <title>Hello World</title>
    </Helmet>
    <p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </p>

    <br />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/redirect" render={() => <Redirect to="/about" />} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
)

export default Layout
