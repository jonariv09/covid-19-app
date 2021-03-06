import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import { login } from "../actions/auth";
import { Auth } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoute } from "./DashboardRoute";
import { PageNotFound } from "../components/404/PageNotFound";

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
		});
	}, [dispatch]);

	if (checking) {
		return <h1> Espere... </h1>;
	}

	return (
		<>
			<Router>
				<div>
					<Switch>
						

						<PublicRoute
							path="/auth"
							component={AuthRouter}
							isAuthenticated={isloggedIn}
						/>

						<PrivateRoute
							isAuthenticated={isloggedIn}
							path="/"
							component={DashboardRoute}
						/>

						<Route
							component={ PageNotFound }
						/>
						{/* <Redirect to="/pagenotfound" /> */}
					</Switch>
				</div>
			</Router>
		</>
	);
};
