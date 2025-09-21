import React, { useState } from "react";
import UserStote from "../../store/UserStote";
import PartiesVoteCard from "../../components/PartiesVoteCard";

function SubmitVote() {
  const { PartyListByPositionRequest, PartyListByPosition } = UserStote();
  const [activeRole, setActiveRole] = useState("");

  const roles = ["Member", "AGS", "GS", "Chairman", "VP"];

  // Handle role click
  const handleRoleClick = (role) => {
    setActiveRole(role);
    PartyListByPositionRequest(role);
  };

  console.log("Selected Role:", activeRole);
  console.log("Parties Response:", PartyListByPosition);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Select Position for submit your valuable vote.
          </h1>
          <p className="text-gray-600">
            You can only select one Position at a time.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="max-w-4xl mx-auto">
          <ul
            className="flex flex-wrap justify-center gap-2 mb-8 p-3"
            role="tablist"
          >
            {roles.map((role) => (
              <li key={role} className="nav-item" role="presentation">
                <button
                  onClick={() => handleRoleClick(role)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeRole === role
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                  type="button"
                  role="tab"
                >
                  {role}
                </button>
              </li>
            ))}
          </ul>

          {/* Content Area */}
          <div className="bg-white border-2 border-blue-100 rounded-xl shadow-sm">
            <div className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <span className="text-xl font-semibold">Selected Position:</span>{" "}
                  {activeRole || "None"}
                </h2>

                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold">
                    {activeRole ? activeRole.charAt(0) : "-"}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Information and available parties for the {activeRole || "selected"} position will be displayed here.
                </p>

                {/* Available Parties */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                  {PartyListByPosition && PartyListByPosition.length > 0 ? (
                    <PartiesVoteCard activeRole={activeRole}/>
                  ) : (
                    <p className="text-gray-500">No parties found for this position.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitVote;
