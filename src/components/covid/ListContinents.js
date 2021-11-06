import React, { useEffect, useState } from "react";
import { IgrDataGridModule, IgrTemplateColumn } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrColumnGroupDescription } from "igniteui-react-grids";
import { IgrGridColumnOptionsModule } from "igniteui-react-grids";

import API from "../../api/api";

import "./covid.css";

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export const DataGridRowGrouping = () => {
	let grid;

	const [statisticsData, setStatisticsData] = useState([]);

	useEffect(() => {
		API.get("statistics").then(function (response) {
			const { response: statisticsData } = response.data;
			setStatisticsData(statisticsData);

			console.log(statisticsData);
		});

		window.addEventListener("load", onLoad);
	}, []);

	const onGridRef = () => {
		if (!grid) {
			return;
		}

		this.grid = grid;
		this.grid.actualDataSource.isSectionExpandedDefault = true;
	};

	const onLoad = () => {
		const continent = new IgrColumnGroupDescription();
		continent.field = "continent";
		continent.displayName = "";
		const country = new IgrColumnGroupDescription();
		country.field = "country";
		country.displayName = "";
		const population = new IgrColumnGroupDescription();
		population.field = "population";
		population.displayName = "";
		this.grid.groupDescriptions.add(continent);
		this.grid.groupDescriptions.add(country);
		this.grid.groupDescriptions.add(population);
	};

	const onCasesCellUpdating = (s, e) => {
		const content = e.content;
		const info = e.cellInfo;
		const cases = info.rowItem.cases;

		if (content.childElementCount === 0) {
			let element = document.createElement("span");
			element.style.fontSize = "14px";
			element.textContent = cases["total"];
			content.appendChild(element);
		}
	};

	const onDeathsCellUpdating = (s, e) => {
		const content = e.content;
		const info = e.cellInfo;
		const deaths = info.rowItem.deaths;

		if (content.childElementCount === 0) {
			let element = document.createElement("span");
			element.style.fontSize = "14px";
			element.textContent = deaths["total"];
			content.appendChild(element);
		}
	};

	const onTestsCellUpdate = (s, e) => {
		const content = e.content;
		const info = e.cellInfo;
		const tests = info.rowItem.tests;

		if (content.childElementCount === 0) {
			let element = document.createElement("span");
			element.style.fontSize = "14px";
			element.textContent = tests["total"];
			content.appendChild(element);
		}
	};

	return (
		<div className="container sample mt-8">
			<IgrDataGrid
				className="grid"
				ref={onGridRef}
				height="calc(100% - 39px)"
				width="100%"
				autoGenerateColumns="false"
				isGroupCollapsable={true}
				groupHeaderDisplayMode="combined"
				dataSource={statisticsData}
				isColumnOptionsEnabled="true"
				editMode="None"
			>
				<IgrTextColumn field="continent" headerText="Continent" />
				<IgrTextColumn field="country" headerText="Country" />
				<IgrNumericColumn
					field="population"
					headerText="Population"
					width="*>110"
				/>

				<IgrTemplateColumn
					headerText="Cases"
					field="cases"
					cellUpdating={onCasesCellUpdating}
					width="*>180"
				/>

				<IgrTemplateColumn
					headerText="Deaths"
					field="deaths"
					cellUpdating={onDeathsCellUpdating}
					he
				/>

				<IgrTemplateColumn
					headerText="Tests"
					field="tests"
					cellUpdating={onTestsCellUpdate}
				/>

				{/* <IgrDateTimeColumn
					field="Birthday"
					headerText="Date of Birth"
					horizontalAlignment="right"
					width="*>160"
				/>
				<IgrImageColumn
					field="CountryFlag"
					headerText="Country"
					width="*>160"
					paddingTop="5"
					paddingBottom="5"
					contentOpacity="1"
					horizontalAlignment="center"
				/>
				<IgrTextColumn field="Street" headerText="Address" width="*>160" />
				<IgrNumericColumn
					field="Salary"
					headerText="Salary"
					width="*>130"
					positivePrefix="$"
					showGroupingSeparator="true"
				/>
				<IgrTextColumn
					field="City"
					width="*>120"
					headerText="City"
					horizontalAlignment="center"
				/> */}
			</IgrDataGrid>
		</div>
	);
};
