import React from "react";

function VoteResult() {
  // Mock data based on your response structure
  const voteResults = [
    {
      "positions": [
        {
          "position": "Member",
          "totalVotes": 0
        },
        {
          "position": "GS",
          "totalVotes": 1
        }
      ],
      "party": "BAL"
    },
    {
      "positions": [
        {
          "position": "GS",
          "totalVotes": 1
        },
        {
          "position": "Chairman",
          "totalVotes": 1
        },
        {
          "position": "VP",
          "totalVotes": 1
        }
      ],
      "party": "NATIONAL CITIZEN PARTY"
    },
    {
      "positions": [
        {
          "position": "GS",
          "totalVotes": 1
        },
        {
          "position": "Member",
          "totalVotes": 0
        },
        {
          "position": "AGS",
          "totalVotes": 1
        },
        {
          "position": "Chairman",
          "totalVotes": 1
        }
      ],
      "party": "BANGLADESH NATIONAL PARTY"
    }
  ];

  // Get all unique positions
  const allPositions = [...new Set(
    voteResults.flatMap(party => party.positions.map(pos => pos.position))
  )].sort();

  // Get party colors for better visualization
  const getPartyColor = (index) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-red-500',
      'bg-purple-500',
      'bg-yellow-500'
    ];
    return colors[index % colors.length];
  };

  const getPartyBorder = (index) => {
    const borders = [
      'border-blue-500',
      'border-green-500',
      'border-red-500', 
      'border-purple-500',
      'border-yellow-500'
    ];
    return borders[index % borders.length];
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Election Results Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time voting results by party and position
          </p>
        </div>

        {/* Results by Party */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {voteResults.map((partyData, index) => (
            <div 
              key={index}
              className={`bg-white border-2 ${getPartyBorder(index)} rounded-xl shadow-lg p-6`}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {partyData.party}
                </h3>
                <div className={`w-12 h-12 ${getPartyColor(index)} rounded-full mx-auto flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {partyData.party.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {partyData.positions.map((position, posIndex) => (
                  <div key={posIndex} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                    <span className="font-medium text-gray-700">
                      {position.position}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`${getPartyColor(index)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {position.totalVotes} votes
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results by Position */}
        <div className="bg-white border-2 border-blue-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Results by Position
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPositions.map((position) => (
              <div key={position} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  {position}
                </h3>
                
                <div className="space-y-2">
                  {voteResults.map((partyData, partyIndex) => {
                    const positionData = partyData.positions.find(p => p.position === position);
                    if (!positionData) return null;
                    
                    return (
                      <div key={partyIndex} className="flex justify-between items-center bg-white rounded p-2">
                        <span className="text-sm font-medium text-gray-700">
                          {partyData.party}
                        </span>
                        <span className={`${getPartyColor(partyIndex)} text-white px-2 py-1 rounded text-xs font-medium`}>
                          {positionData.totalVotes}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-800">
              {voteResults.length}
            </div>
            <div className="text-sm text-blue-600">Total Parties</div>
          </div>
          
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-800">
              {allPositions.length}
            </div>
            <div className="text-sm text-green-600">Total Positions</div>
          </div>
          
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-800">
              {voteResults.reduce((sum, party) => 
                sum + party.positions.reduce((posSum, pos) => posSum + pos.totalVotes, 0), 0
              )}
            </div>
            <div className="text-sm text-purple-600">Total Votes</div>
          </div>
          
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-800">
              {Math.round(
                (voteResults.reduce((sum, party) => 
                  sum + party.positions.reduce((posSum, pos) => posSum + pos.totalVotes, 0), 0
                ) / (voteResults.length * allPositions.length)) * 100
              )}%
            </div>
            <div className="text-sm text-yellow-600">Avg Turnout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoteResult;