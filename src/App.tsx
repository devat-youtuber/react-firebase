import Header from 'components/header'
import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import PageRender from './PageRender'

import { onAuthStateChanged, sendEmailVerification, signOut } from 'firebase/auth'
import { auth } from 'Firebase'


const App = () => {

  const history = useHistory()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user){
        if(!user.emailVerified){
          await sendEmailVerification(user)
          await signOut(auth)
          return history.push("/email_verified");
        }

        console.log(user)
      }
    })

    return unsubscribe;
  },[])

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </div>
  )
}

export default App
