import { Axios } from 'axios';
import { useEffect } from 'react';
import { axiosOptions } from '../../api/axiosOptions';
import axios from 'axios';
import API from '../../api/api';
import { useDispatch } from 'react-redux';
import { DataGridRowGrouping } from './ListContinents';
import './covid.css';


export const CovidScreen = () => {

  let countries = [];
  const dispatch = useDispatch();

  useEffect(() => {
    API.get('countries')
      .then(function (response) {
        console.log(response.data);
      });


  }, [])

  return (
    <>
      <div className="covid-screen">
        <DataGridRowGrouping />
      </div>
    </>
  )
}
