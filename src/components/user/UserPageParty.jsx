import { useEffect } from "react";
import UserStore from "../../store/UserStote";

function UserPageParty() {
  const { PartyDetails, PartyDetailsRequest } = UserStore();

  useEffect(() => {
    (async () => {
      await PartyDetailsRequest();
    })();
  }, []);


  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12">
      {/* HEADER */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          The Future of Voting is Here
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 text-center mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed">
          Skip the lines and the paperwork. Our secure system makes voting as
          simple as a few clicks on your phone or computer.
        </p>
      </div>

      {/* CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {PartyDetails && PartyDetails.length > 0 ? (
          PartyDetails.map((party) => (
            <div
              key={party._id}
              className="p-4 bg-white rounded-lg shadow max-w-60"
            >
              <p className="text-gray-900 text-sm font-semibold uppercase">
                {party.name}
              </p>
              <p className="text-gray-500 text-sm">
                Position: <span className="font-bold">{party.position}</span>
              </p>
              <p className="text-gray-900 font-semibold text-sm mb-3">
                Total Vote: <span className="font-bold">{party.voteCount}</span>
              </p>

              <img
                className="rounded-md w-full h-32 object-cover"
                src={party.sign || "https://via.placeholder.com/150"}
                alt={party.name}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No parties available.
          </p>
        )}
      </div>
    </div>
  );
}

export default UserPageParty;
