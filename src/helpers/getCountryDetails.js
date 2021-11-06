

export const getCountryDetails = (statistics, country) => {
  if(country === '')
    return [];

  console.log('statistics', statistics);

  const _country = country.toLowerCase();
  return statistics !== undefined 
            ? statistics.filter(statistic => statistic.country?.toLowerCase().includes(_country))
            : [];
}
