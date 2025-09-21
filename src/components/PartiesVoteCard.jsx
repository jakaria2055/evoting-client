import UserStore from "../store/UserStote";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PartiesVoteCard({activeRole}) {
  const navigate = useNavigate();
  const { PartyListByPosition, SubmitVoteRequest } = UserStore();

  const handleVote = async (partyId, activeRole) => {
    try {
      console.log("Voting for Party ID:", partyId, "Position:", activeRole);

      const res = await SubmitVoteRequest(partyId, activeRole);

      if (res && res.success === true) {
        toast.success(`Vote Submitted for ${activeRole}!`);
        navigate("/user-home");
      } else {
        toast.error(res?.message || "Failed to submit vote");
        navigate("/user-home");
      }
    } catch (error) {
      console.error("Vote submission error:", error);
      toast.error("Something went wrong while submitting vote");
      navigate("/user-home");
    }
  };

  return (
    <>
      {PartyListByPosition && PartyListByPosition.length > 0 ? (
        PartyListByPosition.map((party, index) => (
          <div
            key={party._id || index}
            className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 w-full"
          >
            <div className="group cursor-pointer flex items-center justify-center px-2">
              <img
                className="group-hover:scale-105 transition max-w-26 md:max-w-36"
                src={party.sign}
                alt={party.name}
              />
            </div>
            <div className="text-gray-500/60 text-sm">
              <p className="text-gray-700 font-medium text-lg w-full">
                {party.name}
              </p>

              <div className="flex items-end justify-between mt-3">
                <div className="text-indigo-500">
                  <button
                    onClick={() => handleVote(party._id, activeRole)}
                    className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                        stroke="#615fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    VOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No parties available for this position.</p>
      )}
    </>
  );
}

export default PartiesVoteCard;
