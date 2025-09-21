import React from "react";
import AdminStore from "../../store/AdminStore";
import { useEffect } from "react";

const GetNID = () => {
  const { NIDList, NIDListRequest } = AdminStore();
  useEffect(() => {
    (async () => {
      await NIDListRequest();
    })();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-blue-200 p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Registered NID List
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-blue-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-blue-800 border-b border-blue-200">
                  #
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-blue-800 border-b border-blue-200">
                  NID Number
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-blue-800 border-b border-blue-200">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-blue-800 border-b border-blue-200">
                  Registered At
                </th>
              </tr>
            </thead>
            <tbody>
              {NIDList && NIDList.length > 0 ? (
                NIDList.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td className="py-3 px-4 text-sm text-gray-700 border-b border-blue-100">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b border-blue-100">
                      {item.nidNumber}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b border-blue-100">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 border-b border-blue-100">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-6 text-center text-gray-500 border-b border-blue-100"
                  >
                    No NID data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetNID;
