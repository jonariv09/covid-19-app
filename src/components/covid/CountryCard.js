

export const CountryCard = (statistic) => {

  const getTime = date => {
    const newDate = new Date(date);
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    }
    return Intl.DateTimeFormat("en-US", options).format(newDate);
  }
  
  
  return (
    <>
      <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-6 ">
        <div className="flex items-center w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <span className="ml-5">
            <span className="text-white font-semibold"> Continent: </span> 
            <span className="text-white"> { statistic.continent } </span>
          </span>
        </div>

        <div className="flex items-center w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <span className="ml-5">
            <span className="text-white font-semibold"> Population: </span> 
            <span className="text-white"> { statistic.population } </span>
          </span>
        </div>

        <div className="flex w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <span className="ml-5 flex flex-col">
            <span className="text-white font-semibold"> Cases: </span>
            <div className="text-white text-xs ml-2 flex flex-col">
              <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                New: { statistic.cases.new }
              </span>
              <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                Active: { statistic.cases.active }
              </span>
              <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                Critical: { statistic.cases.critical }
              </span>
              <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                Recovered: { statistic.cases.recovered }
              </span>
              <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                1M_pop: { statistic.cases["1M_pop"] }
              </span>
              <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                Total: { statistic.cases.total }
              </span>
              
            </div>
          </span>
        </div>

        <div className="flex w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <span className="ml-5 flex flex-col">
            <span className="text-white font-semibold"> Deaths: </span>
            <div className="text-white text-xs ml-2 flex flex-col">
              <span className="badge bg-light border border-red-400 rounded-pill p-1">
                New: { statistic.deaths.new }
              </span>
              <span className="badge bg-light border border-red-400 badge-type-project rounded-pill p-1">
                1M_pop: { statistic.deaths["1M_pop"] }
              </span>
              <span className="badge bg-light border border-red-400 badge-type-project rounded-pill p-1">
                Total: { statistic.deaths.total }
              </span>
              
            </div>
          </span>
        </div>

        <div className="flex w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <span className="ml-5 flex flex-col">
            <span className="text-white font-semibold"> Tests: </span>
            <div className="text-white text-xs ml-2 flex flex-col">
              <span className="badge bg-light border border-red-400 rounded-pill p-1">
                1M_pop: { statistic.tests["1M_pop"] }
              </span>
              <span className="badge bg-light border border-red-400
                badge-type-project rounded-pill p-1">
                Total: { statistic.tests.total }
              </span>
            </div>
          </span>
        </div>

        <div className="flex items-center w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <span className="ml-5">
            <span className="text-white font-semibold"> Day: </span> 
            <span className="text-white"> { statistic.day } </span>
          </span>
        </div>

        <div className="flex items-start w-full text-sm mb-1">
          <div className="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
          </div>
          <div className="ml-5">
            <span className="text-white font-semibold"> Time: </span> 
            <span className="text-white"> { getTime(statistic.time) } </span>
          </div>
        </div>


      </div>
    </>
  )

}
