import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { onAuthStateChanged } from "firebase/auth";
import { login } from '../actions/auth';
import { Auth } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { CovidScreen } from '../components/covid/CovidScreen';
import { DashboardRoute } from './DashboardRoute';
import { SearchScreen } from '../components/search/SearchScreen';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
      onAuthStateChanged(Auth, async (user) => {
          if (user) {
              const { uid, displayName } = user;
              dispatch(login(uid, displayName));
              setIsloggedIn(true);

          } else {
              setIsloggedIn(false);
          }

          setChecking(false);
      })
  }, [dispatch])

  if(checking) {
      return (
          <h1> Espere... </h1>
      )
  }

  return (
    <>

      <Router>
          <div>
              <Switch>

                  <PublicRoute
                    exact
                    path="/auth"
                    component={ AuthRouter }
                    isAuthenticated={isloggedIn}
                  />

                  {/* <Route
                      exact
                      path="/"
                      component={ DashboardRoute }
                  /> */}

                  <PrivateRoute
                      isAuthenticated={isloggedIn}
                      path="/"
                      component={ DashboardRoute }
                  />

                  <Redirect to="/auth/login" />

              </Switch>
          </div>
      </Router>
    </>
  )

}