import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getCountryDetails } from "../../helpers/getCountryDetails";
import "./search.css";
import { useLocation } from "react-router";
import API from "../../api/api";
import { ListCountries } from "../covid/ListCountries";

export const SearchScreen = ({ history }) => {
	const [statisticData, setStatisticData] = useState();
	const [values, handleInputChange] = useForm({ searchField: "" });

	const { searchField } = values;

	const location = useLocation();
	const { q = "" } = queryString.parse(location.search);

	const getStatistics = async () => {
		const response = await API.get("statistics");
		const { response: statisticsData } = response.data;
		return statisticsData;
	};

	useEffect(() => {
		async function fetchData() {
			const result = await getStatistics();
			setStatisticData(result);
		}

		fetchData();
	}, [setStatisticData]);

	const statisticsFiltered = useMemo(
		() => getCountryDetails(statisticData, q),
		[statisticData, q]
	);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchField}`);
	};

	return (
		<>
			<div className="container-fluid mt-10 flex flex-col items-center">
				<form className="w-3/5" onSubmit={handleSearch}>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3 flex justify-center">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="button"
							>
								Search
							</button>
						</div>
						<div className="md:w-2/3">
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="inline-full-name"
								type="text"
								name="searchField"
								value={searchField}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				</form>

				<div>
					{q === "" && (
						<div
							className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
							role="alert"
						>
							<strong className="font-bold">Search a hero!</strong>
						</div>
					)}

					{q !== "" && statisticsFiltered.length === 0 && (
						<div
							className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
							role="alert"
						>
							<strong className="font-bold">
								{" "}
								There is not a country with{" "}
							</strong>
							<span className="block sm:inline"> {q} </span>
						</div>
					)}
				</div>
			</div>

			<div>
				<ListCountries />
			</div>
		</>
	);
};
