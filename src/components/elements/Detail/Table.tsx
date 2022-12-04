import React from "react";

interface TableProps {}

const Table: React.FC<TableProps> = ({}) => {
  return (
    <>
      <section className="w-full text-white flex justify-start">
        <div className="">
          <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-[#25262d] shadow-lg">
            <header className="border-b border-gray-100 px-5 py-4">
              <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="bg-[#25262d]text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Name</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Price</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">7d</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-[#25262d] text-sm">

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
