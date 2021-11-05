import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


export const AppRouter = () => {

  return (
    <Router>
        <div>
            <Switch>
                {/* <Route
                    path="/auth"
                    component={ AuthRouter }
                /> */}

                <PublicRoute
                    path="/auth"
                    component={ AuthRouter }
                    isAuthenticated={isloggedIn}
                />

                <PrivateRoute
                    isAuthenticated={isloggedIn}
                    exact
                    path="/"
                    component={ JournalScreen }
                />

                <Redirect to="/auth/login" />

            </Switch>
        </div>
    </Router>
  )

}