import Header from 'components/header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PageRender from './PageRender'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
