import { Switch, Route } from "react-router-dom";
import { PageNotFound } from "../components/404/PageNotFound";
import { CovidScreen } from "../components/covid/CovidScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoute = () => {
	return (
		<>
		{/* <div className="bg-gray-300 h-full"> */}
			<Navbar />

			{/* <div className="container"> */}
				<Switch>
					<Route exact path="/" component={CovidScreen} />
					<Route path="/search" component={SearchScreen} />

					<Route component={ PageNotFound }/>
				</Switch>
			{/* </div> */}
		{/* </div> */}

		</>
	);
};
