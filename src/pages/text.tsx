import React from "react";

interface textProps {}

const text: React.FC<textProps> = ({}) => {
  return (
    <>
      <div className="ct-docs-disable-sidebar-content relative flex w-full overflow-x-hidden">
        <nav className="z-9999 absolute top-0 bottom-0 left-0 block w-64 -translate-x-full transform flex-row flex-nowrap bg-white py-4 px-6 shadow-xl transition-all duration-300 ease-in-out md:z-10 md:translate-x-0">
          <button className="text-blueGray-700 border-blueGray-100 -right-24-px z-9998 absolute top-1/2 flex h-10 w-6 cursor-pointer items-center justify-center rounded-r border border-l-0 border-r border-t border-b border-solid border-solid border-transparent bg-white text-xl leading-none focus:outline-none md:hidden">
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className="mx-auto flex min-h-full w-full flex-col flex-wrap items-center justify-between overflow-y-auto overflow-x-hidden px-0">
            <div className="relative z-40 mt-4 flex h-auto w-full flex-1 flex-col items-center items-stretch overflow-y-auto overflow-x-hidden rounded bg-white opacity-100">
              <div className="flex list-none flex-col md:min-w-full md:flex-col">
                <hr className="my-4 md:min-w-full" />
                <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
                  Section 3
                </h6>
                <a
                  href="javascript:;"
                  className="text-blueGray-800 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>
                  Page 1 for Section 3
                </a>
                <a
                  href="javascript:;"
                  className="text-blueGray-800 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>
                  Page 2 for Section 3
                </a>
                <a
                  href="javascript:;"
                  className="text-blueGray-800 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                >
                  <i className="fas fa-paint-brush text-blueGray-400 mr-2 text-sm"></i>
                  Page 3 for Section 3
                </a>
                <hr className="my-4 md:min-w-full" />
                <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
                  Section 4
                </h6>
                <a
                  href="javascript:;"
                  className="text-blueGray-800 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                >
                  <i className="fab fa-angular text-blueGray-400 mr-2 text-sm"></i>
                  Page 1 for Section 4
                </a>
                <a
                  href="javascript:;"
                  className="text-blueGray-800 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                >
                  <i className="fab fa-react text-blueGray-400 mr-2 text-sm"></i>
                  Page 2 for Section 4
                </a>
                <a
                  href="javascript:;"
                  className="text-blueGray-800 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                >
                  <i className="fab fa-vuejs text-blueGray-400 mr-2 text-sm"></i>
                  Page 3 for Section 4
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="bg-blueGray-100 relative w-full md:ml-64">
          <nav className="absolute top-0 left-0 z-10 flex w-full items-center bg-white py-1 px-4 lg:flex-row lg:flex-nowrap lg:justify-start lg:bg-transparent">
            <div className="mx-aut0 flex w-full flex-wrap items-center justify-between px-4 lg:flex-nowrap lg:px-6">
              <a
                href="javascript:;"
                className="text-blueGray-800 my-3 inline-block text-sm font-semibold uppercase lg:text-white"
              >
                Settings Page
              </a>
              <button
                className="border-blueGray-400 text-blueGray-300 ml-auto block cursor-pointer rounded border border-solid bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className="lg:h-auto-important hidden w-full flex-grow items-center transition-all duration-300 ease-in-out lg:flex lg:w-auto">
                <form className="ml-auto mr-3 mt-3 flex flex-row flex-wrap items-center">
                  <div className="mb-3 pt-0">
                    <input
                      placeholder="Search here"
                      type="text"
                      className="placeholder-blueGray-200 text-blueGray-700 focus:ring-lightBlue-500 focus:border-lightBlue-500 relative  w-full rounded-md border border-solid border-transparent bg-white px-3 py-2 text-sm shadow outline-none transition duration-200 focus:ring focus:ring-1 "
                    />
                  </div>
                </form>
                <a className="text-blueGray-500 block" href="javascript:;">
                  <div className="flex items-center">
                    <span className="bg-blueGray-300 inline-flex h-12 w-12 items-center justify-center rounded-full text-sm text-white">
                      <img
                        alt="..."
                        className="w-full rounded-full border-none align-middle shadow-lg"
                        src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                      />
                    </span>
                  </div>
                </a>
                <div className="z-50 block">
                  <div className="min-w-48 absolute float-left origin-top-right scale-95 transform list-none rounded-lg border bg-white p-2 text-left text-base opacity-0 shadow-lg transition-all duration-100 ease-in-out">
                    <a
                      href="javascript:;"
                      className="hover:bg-blueGray-100 block w-full whitespace-nowrap rounded bg-transparent px-3 py-2 text-sm transition-all duration-100"
                    >
                      Action
                    </a>
                    <a
                      href="javascript:;"
                      className="hover:bg-blueGray-100 block w-full whitespace-nowrap rounded bg-transparent px-3 py-2 text-sm transition-all duration-100"
                    >
                      Another action
                    </a>
                    <a
                      href="javascript:;"
                      className="hover:bg-blueGray-100 block w-full whitespace-nowrap rounded bg-transparent px-3 py-2 text-sm transition-all duration-100"
                    >
                      Something else here
                    </a>
                    <div className="border-blueGray-100 my-2 h-0 border border-solid"></div>
                    <a
                      href="javascript:;"
                      className="hover:bg-blueGray-100 block w-full whitespace-nowrap rounded bg-transparent px-3 py-2 text-sm transition-all duration-100"
                    >
                      Seprated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="bg-lightBlue-500 relative pt-32 pb-32">
            <div className="mx-auto w-full px-4 md:px-6">
              <div>
                <div className="flex flex-wrap">
                  <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                    <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                            <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                              Traffic
                            </h5>
                            <span className="text-xl font-bold">350,897</span>
                          </div>
                          <div className="relative w-auto flex-initial pl-4">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-3 text-center text-white shadow-lg">
                              <i className="far fa-chart-bar"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-blueGray-500 mt-4 text-sm">
                          <span className="mr-2 text-emerald-500">
                            <i className="fas fa-arrow-up"></i> 3.48%
                          </span>
                          <span className="whitespace-nowrap">
                            Since last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                    <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                            <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                              NEW USERS
                            </h5>
                            <span className="text-xl font-bold">2,356</span>
                          </div>
                          <div className="relative w-auto flex-initial pl-4">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 p-3 text-center text-white shadow-lg">
                              <i className="fas fa-chart-pie"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-blueGray-500 mt-4 text-sm">
                          <span className="mr-2 text-red-500">
                            <i className="fas fa-arrow-down"></i> 3.48%
                          </span>
                          <span className="whitespace-nowrap">
                            Since last week
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                    <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                            <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                              SALES
                            </h5>
                            <span className="text-xl font-bold">924</span>
                          </div>
                          <div className="relative w-auto flex-initial pl-4">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 p-3 text-center text-white shadow-lg">
                              <i className="fas fa-users"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-blueGray-500 mt-4 text-sm">
                          <span className="mr-2 text-orange-500">
                            <i className="fas fa-arrow-down"></i> 1.10%
                          </span>
                          <span className="whitespace-nowrap">
                            Since yesterday
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                    <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                            <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                              PERFORMANCE
                            </h5>
                            <span className="text-xl font-bold">49,65%</span>
                          </div>
                          <div className="relative w-auto flex-initial pl-4">
                            <div className="bg-lightBlue-500 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg">
                              <i className="fas fa-percent"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-blueGray-500 mt-4 text-sm">
                          <span className="mr-2 text-emerald-500">
                            <i className="fas fa-arrow-up"></i> 12%
                          </span>
                          <span className="whitespace-nowrap">
                            Since last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto -mt-24 w-full px-4 md:px-6">
            <div className="flex flex-wrap">
              <div className="w-full px-4 xl:w-8/12">
                <div className="bg-blueGray-800 relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg">
                  <div className="mb-0 rounded-t bg-transparent px-4 py-3">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full max-w-full flex-1 flex-grow">
                        <h6 className="text-blueGray-200 mb-1 text-xs font-semibold uppercase">
                          Overview
                        </h6>
                        <h2 className="text-xl font-semibold text-white">
                          Sales value
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="h-350-px relative">
                      <canvas width="496" height="291" id="line-chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 xl:w-4/12">
                
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full px-4 xl:w-8/12">
                <div className="text-blueGray-700 relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="border-0 px-6 py-4">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full max-w-full flex-1 flex-grow">
                        <h3 className="text-blueGray-700 text-lg font-bold">
                          Page visits
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    <table className="w-full border-collapse items-center bg-transparent">
                      <thead>
                        <tr>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                            Page name
                          </th>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                            Visitors
                          </th>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                            Unique Users
                          </th>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                            Bounce Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                /argon/
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">4,569</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">340</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up mr-2 text-emerald-500"></i>
                              46,53%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                /argon/index.html
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">3,985</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">319</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-down mr-2 text-orange-500"></i>
                              46,53%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                /argon/charts.html
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">3,513</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">294</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-down mr-2 text-orange-500"></i>
                              36,49%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                /argon/tables.html
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">2,050</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">147</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up mr-2 text-emerald-500"></i>
                              50,87%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                /argon/profile.html
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">1,795</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">190</div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up mr-2 text-red-500"></i>
                              46,53%
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 xl:w-4/12">
                <div className="text-blueGray-700 relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="border-0 px-6 py-4">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full max-w-full flex-1 flex-grow">
                        <h3 className="text-blueGray-700 text-lg font-bold">
                          Social traffic
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    <table className="w-full border-collapse items-center bg-transparent">
                      <thead>
                        <tr>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                            Referral
                          </th>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                            Visitors
                          </th>
                          <th className="bg-blueGray-100 text-blueGray-500 border-blueGray-200 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                Facebook
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">1,480</div>
                          </td>
                          <td className="min-w-140-px whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="mr-2">60%</span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                                  <div className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                Facebook
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">5,480</div>
                          </td>
                          <td className="min-w-140-px whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="mr-2">70%</span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden rounded bg-emerald-200 text-xs">
                                  <div className="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">Google</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">4,807</div>
                          </td>
                          <td className="min-w-140-px whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="mr-2">80%</span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden rounded bg-indigo-200 text-xs">
                                  <div className="flex flex-col justify-center whitespace-nowrap bg-indigo-500 text-center text-white shadow-none"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                Instagram
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">3,678</div>
                          </td>
                          <td className="min-w-140-px whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="mr-2">75%</span>
                              <div className="relative w-full">
                                <div className="bg-lightBlue-200 flex h-2 overflow-hidden rounded text-xs">
                                  <div className="bg-lightBlue-500 flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="NaN ml-3 font-bold">
                                Twitter
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">2,645 </div>
                          </td>
                          <td className="min-w-140-px whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                            <div className="flex items-center">
                              <span className="mr-2">30%</span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden rounded bg-amber-200 text-xs">
                                  <div className="flex flex-col justify-center whitespace-nowrap bg-amber-500 text-center text-white shadow-none"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <footer className="block py-4">
              <div className="container mx-auto px-4">
                <hr className="border-b-1 border-blueGray-200 mb-4" />
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                  <div className="w-full px-4 md:w-4/12">
                    <div className="mb-2 text-center md:mb-0 md:text-left">
                      <a
                        href="https://www.creative-tim.com/?ref=npr-footeradmin"
                        target="_blank"
                        className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left"
                      >
                        Copyright © 2021 Creative Tim
                      </a>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-8/12">
                    <ul className="flex list-none flex-wrap justify-center  md:justify-end">
                      <li>
                        <a
                          href="https://www.creative-tim.com?ref=npr-footeradmin"
                          target="_blank"
                          className="text-blueGray-700 hover:text-blueGray-900 block py-1 px-3 text-sm font-semibold"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.creative-tim.com/presentation?ref=npr-footeradmin"
                          target="_blank"
                          className="text-blueGray-700 hover:text-blueGray-900 block py-1 px-3 text-sm font-semibold"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.creative-tim.com/blog/?ref=npr-footeradmin"
                          target="_blank"
                          className="text-blueGray-700 hover:text-blueGray-900 block py-1 px-3 text-sm font-semibold"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.creative-tim.com/license?ref=npr-footeradmin"
                          target="_blank"
                          className="text-blueGray-700 hover:text-blueGray-900 block py-1 px-3 text-sm font-semibold"
                        >
                          Licenses
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default text;
