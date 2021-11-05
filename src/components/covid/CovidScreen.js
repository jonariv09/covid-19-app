import { Axios } from 'axios';
import { useEffect } from 'react';
import { axiosOptions } from '../../api/axiosOptions';
import axios from 'axios';
import API from '../../api/api';


export const CovidScreen = () => {

  let countries = [];

  useEffect(() => {
    API.get('countries')
      .then(function (response) {
        console.log(response.data);
      })
    
  }, [])

  return (
    <>
      CovidScreen
    </>
  )
}
