export const ListCountries = () => {
	return (
		<div className="w-full">
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

        {/* CARDS */}
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
					
          <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-6 ">
						{/* <div className="mb-8">
							<img
								className="object-center object-cover rounded-full h-36 w-36"
								src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Dany Bailey</p>
							<p className="text-base text-gray-400 font-normal">
								Software Engineer
							</p>
						</div> */}
            <div className="flex items-center w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <span className="ml-5">
                <span className="text-white font-semibold"> Continent: </span> 
                <span className="text-white"> Europe </span>
              </span>
            </div>

            <div className="flex items-center w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <span className="ml-5">
                <span className="text-white font-semibold"> Population: </span> 
                <span className="text-white"> { 234234 } </span>
              </span>
            </div>

            <div className="flex w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <span className="ml-5 flex flex-col">
                <span className="text-white font-semibold"> Cases: </span>
                <div className="text-white text-xs ml-2 flex flex-col">
                  <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                    New: { 234234 }
                  </span>
                  <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                    Active: { 234234 }
                  </span>
                  <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                    Critical: { 234234 }
                  </span>
                  <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                    Recovered: { 234234 }
                  </span>
                  <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                    1M_pop: { 234234 }
                  </span>
                  <span className="badge bg-light border badge-type-project rounded-pill border-red-400 p-1">
                    Total: { 234234 }
                  </span>
                  
                </div>
              </span>
            </div>

            <div className="flex w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <span className="ml-5 flex flex-col">
                <span className="text-white font-semibold"> Deaths: </span>
                <div className="text-white text-xs ml-2 flex flex-col">
                  <span className="badge bg-light border border-red-400 rounded-pill p-1">
                    New: { 234234 }
                  </span>
                  <span className="badge bg-light border border-red-400 badge-type-project rounded-pill p-1">
                    1M_pop: { 234234 }
                  </span>
                  <span className="badge bg-light border border-red-400 badge-type-project rounded-pill p-1">
                    Total: { 234234 }
                  </span>
                  
                </div>
              </span>
            </div>

            <div className="flex w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <span className="ml-5 flex flex-col">
                <span className="text-white font-semibold"> Tests: </span>
                <div className="text-white text-xs ml-2 flex flex-col">
                  <span className="badge bg-light border border-red-400 rounded-pill p-1">
                    1M_pop: { 234234 }
                  </span>
                  <span className="badge bg-light border border-red-400
                    badge-type-project rounded-pill p-1">
                    Total: { 234234 }
                  </span>
                </div>
              </span>
            </div>

            <div className="flex items-center w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <span className="ml-5">
                <span className="text-white font-semibold"> Day: </span> 
                <span className="text-white"> 24/09/97 </span>
              </span>
            </div>

            <div className="flex items-start w-full text-sm mb-1">
              <div class="w-0 h-0 pb-3 pl-3 rounded-md bg-indigo-500 text-white">
              </div>
              <div className="ml-5">
                <span className="text-white font-semibold"> Time: </span> 
                <span className="text-white"> 2021-11-05T20:45:02+00:00 </span>
              </div>
            </div>


					</div>
          
					<div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<img
								className="object-center object-cover rounded-full h-36 w-36"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Lucy Carter</p>
							<p className="text-base text-gray-400 font-normal">
								Graphic Designer
							</p>
						</div>
					</div>

					<div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<img
								className="object-center object-cover rounded-full h-36 w-36"
								src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Jade Bradley</p>
							<p className="text-base text-gray-400 font-normal">Dev Ops</p>
						</div>
					</div>

					<div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<img
								className="object-center object-cover rounded-full h-36 w-36"
								src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Dany Bailey</p>
							<p className="text-base text-gray-400 font-normal">
								Software Engineer
							</p>
						</div>
					</div>

					<div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<img
								className="object-center object-cover rounded-full h-36 w-36"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Lucy Carter</p>
							<p className="text-base text-gray-400 font-normal">
								Graphic Designer
							</p>
						</div>
					</div>

					<div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<img
								className="object-center object-cover rounded-full h-36 w-36"
								src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Jade Bradley</p>
							<p className="text-base text-gray-400 font-normal">Dev Ops</p>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
};
