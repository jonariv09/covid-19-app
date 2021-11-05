import React, { useEffect, useState } from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import './covid.css';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export const DataGridRowGrouping = () => {

    
    let grid;

    const [data, setData] = useState([]);
    const [isGroupCollapsible, setIsGroupCollapsible] = useState(true);
    const [componentVisible, setComponentVisible] = useState(true);

    useEffect(() => {

      setData(DataGridSharedData.getEmployees(50));
      console.log(data);

      window.addEventListener('load', onLoad);

    }, [])

    const onGroupHeaderCollapsible = (e) =>{
      const isCollapsible = e.target.checked;

      if (isCollapsible) {
          this.setState( {isGroupCollapsible: true} );
      }
      else {
          this.setState( {isGroupCollapsible: false} );
      }
  }

  const onSectionHeaderDisplayModeChanging = (e) => {
      this.grid.groupHeaderDisplayMode = e.target.value;
  }

  const onGridRef = () => {
      if (!grid) { return; }

      this.grid = grid;
      this.grid.actualDataSource.isSectionExpandedDefault = true;
  }

  const onLoad = () => {
      const state = new IgrColumnGroupDescription();
      state.field = "Country";
      state.displayName = "Location";
      const city = new IgrColumnGroupDescription();
      city.field = "City";
      city.displayName = "";
      const income = new IgrColumnGroupDescription();
      income.field = "Income";
      income.displayName = "Income";
      this.grid.groupDescriptions.add(state);
      this.grid.groupDescriptions.add(city);
      this.grid.groupDescriptions.add(income);
  }

  return (
      <div className="container sample">
        <div className="options horizontal">
            <label className="options-label" style={{ width: "215px" }}>Section Header Display Mode:</label>
            <select className="options-select" style={{ width: "100px" }} defaultValue="Deferred" onChange={onSectionHeaderDisplayModeChanging}>
                <option>Combined</option>
                <option>Split</option>
            </select>

        </div>

        <IgrDataGrid
          className="grid"
          ref={onGridRef}
          height="calc(100% - 39px)"
          width="100%"
          autoGenerateColumns="false"
          isGroupCollapsable={isGroupCollapsible}
          groupHeaderDisplayMode = "combined"
          dataSource={data}
          isColumnOptionsEnabled="true"
          editMode="None"
        >
                <IgrTextColumn field="Name" headerText="Name" />
                <IgrNumericColumn field="Age" headerText="Age" width="*>110"/>
                <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                horizontalAlignment="right"  width="*>160"/>
                <IgrImageColumn field="CountryFlag" headerText="Country" width="*>160"
                paddingTop="5" paddingBottom="5" contentOpacity="1" horizontalAlignment="center"/>
                <IgrTextColumn field="Street" headerText="Address" width="*>160"/>
                <IgrNumericColumn field="Salary" headerText="Salary" width="*>130"
                positivePrefix="$" showGroupingSeparator="true"  />
                <IgrTextColumn field="City" width="*>120" headerText="City" horizontalAlignment="center"/>
        </IgrDataGrid>
      </div>
  );

}