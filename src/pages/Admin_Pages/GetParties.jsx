import { useEffect } from "react";
import AdminStore from "../../store/AdminStore";
import AdminSidebar from "../../components/admin/AdminSidebar";

function GetParties() {
  const { PartyDetails, PartyDetailsRequest } = AdminStore();

  useEffect(() => {
    (async () => {
      await PartyDetailsRequest();
    })();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* LEFT SIDEBAR - Fixed */}
      <div className="w-1/5 flex-shrink-0">
        <div className="h-full overflow-y-auto">
          <AdminSidebar />
        </div>
      </div>

      <div className="w-4/5 flex-1 overflow-y-auto">
        <div className="p-5">
          <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12">
            {/* HEADER */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
                All Available Parties
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 text-center mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed">
                Skip the lines and the paperwork. Our secure system makes voting
                as simple as a few clicks on your phone or computer.
              </p>
            </div>

            {/* LIST VIEW */}
            <div className="bg-blue-50 rounded-lg shadow border border-blue-200">
              {PartyDetails && PartyDetails.length > 0 ? (
                <ul className="divide-y divide-blue-200">
                  {PartyDetails.map((party) => (
                    <li
                      key={party._id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-blue-100 transition"
                    >
                      {/* Party Info */}
                      <div className="flex-1">
                        <p className="text-gray-900 font-semibold text-lg">
                          {party.name}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Position:{" "}
                          <span className="font-medium">{party.position}</span>
                        </p>
                        <p className="text-gray-900 font-medium text-sm">
                          Total Vote:{" "}
                          <span className="font-bold">{party.voteCount}</span>
                        </p>
                      </div>

                      {/* Party Sign */}
                      <div className="mt-3 sm:mt-0 sm:ml-4">
                        <img
                          className="w-20 h-20 rounded border border-blue-300 object-cover"
                          src={party.sign || "https://via.placeholder.com/100"}
                          alt={party.name}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center p-6">
                  No parties available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetParties;
