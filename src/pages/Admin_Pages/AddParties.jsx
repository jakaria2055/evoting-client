import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AdminStore from "../../store/AdminStore";

function AddParties() {
  const navigate = useNavigate();

  const {
    PartyFormData,
    PartyFormChange,
    TogglePartyPosition,
    ResetPartyForm,
    AddPartyRequest,
    isCreatingParty,
    availablePositions,
    partyCreateResult,
    ClearPartyCreateResult,
  } = AdminStore();

  // Show toast and navigate after create
  useEffect(() => {
    if (!partyCreateResult) return;

    toast[partyCreateResult.success ? "success" : "error"](
      partyCreateResult.message
    );

    if (partyCreateResult.success) navigate("/admin/services");

    ClearPartyCreateResult();
  }, [partyCreateResult, navigate, ClearPartyCreateResult]);

  // Handle input change
  const handleInputChange = (e) => {
    PartyFormChange(e.target.name, e.target.value);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!PartyFormData.name.trim()) return toast.error("Party name is required");
    if (!PartyFormData.sign.trim()) return toast.error("Party logo URL is required");
    if (PartyFormData.positions.length === 0)
      return toast.error("Please select at least one position");

    AddPartyRequest({
      name: PartyFormData.name.trim(),
      sign: PartyFormData.sign.trim(),
      positions: PartyFormData.positions,
    });
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Create New Party
          </h1>
          <p className="text-gray-600 mt-2">
            Fill in the details and select positions for this party.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border-2 border-blue-100 rounded-2xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Party Name */}
            <input
              type="text"
              name="name"
              value={PartyFormData.name}
              onChange={handleInputChange}
              placeholder="Enter party name"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500"
              disabled={isCreatingParty}
            />

            {/* Logo URL */}
            <input
              type="url"
              name="sign"
              value={PartyFormData.sign}
              onChange={handleInputChange}
              placeholder="https://example.com/logo.png"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500"
              disabled={isCreatingParty}
            />

            {/* Positions */}
            <div>
              <p className="mb-2 font-semibold text-gray-700">Select Positions</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availablePositions.map((pos) => {
                  const isSelected = PartyFormData.positions.includes(pos);
                  return (
                    <button
                      key={pos}
                      type="button"
                      onClick={() => TogglePartyPosition(pos)}
                      disabled={isCreatingParty}
                      className={`px-4 py-2 rounded-lg border-2 text-sm transition ${
                        isSelected
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white text-blue-600 border-blue-200 hover:border-blue-400"
                      } ${isCreatingParty && "opacity-50 cursor-not-allowed"}`}
                    >
                      {pos}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isCreatingParty}
                className={`flex-1 py-3 rounded-lg text-white font-semibold ${
                  isCreatingParty
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isCreatingParty ? "Creating..." : "Create Party"}
              </button>
              <button
                type="button"
                onClick={ResetPartyForm}
                disabled={isCreatingParty}
                className={`flex-1 py-3 rounded-lg font-semibold border-2 border-blue-200 text-blue-600 ${
                  isCreatingParty
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-50"
                }`}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddParties;
