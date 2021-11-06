import { Switch, Route } from "react-router-dom";
import { CovidScreen } from "../components/covid/CovidScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoute = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Switch>
					<Route exact path="/" component={CovidScreen} />
					<Route path="/search" component={SearchScreen} />
				</Switch>
			</div>
		</>
	);
};
