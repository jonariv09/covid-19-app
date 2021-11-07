import { useSelector } from "react-redux";
import { CountryCard } from "./CountryCard";

export const ListCountries = () => {

  const { filteredResults } = useSelector(state => state.statistics);

	return (
		<div className="w-full">
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

        {/* CARDS */}
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
					
          {
            filteredResults && filteredResults.map(statistic => (
              <CountryCard
                key={statistic.country}
                { ...statistic }
              />
            ))
          }

          
				</div>
			</section>
		</div>
	);
};
