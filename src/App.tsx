import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PageRender from './PageRender'


const App = () => {
  return (
    <BrowserRouter>
      <h1 className='text-green-500'>Hello Friends</h1>
      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
