import React, { useState } from "react";
import AdminStore from "../../store/AdminStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddNID() {
    const navigate = useNavigate();
  const { NIDFormData, NIDFormChange, AddNIDRequest } = AdminStore();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Basic validation
    if (!NIDFormData.nidNumber.trim() || !NIDFormData.name.trim()) {
      setMessage({ type: "error", text: "All fields are required" });
      setLoading(false);
      return;
    }

    // NID number validation (basic)
    if (NIDFormData.nidNumber.length < 8) {
      setMessage({
        type: "error",
        text: "NID number must be at least 8 digits",
      });
      setLoading(false);
      return;
    }

    try {
      // Call API
      const success = await AddNIDRequest(NIDFormData);

      if (success) {
        setMessage({ type: "success", text: "NID registered successfully!" });
        toast.success("NID added successfully.");
        navigate("/admin/services")
        // Reset form fields
        NIDFormChange("nidNumber", "");
        NIDFormChange("name", "");
      } else {
        setMessage({ type: "error", text: "Registration failed." });
        toast.error("Failed to add NID.");
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Please try again." });
      toast.error("Add NID failed.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/icon/ADDNID.svg" alt="" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              NID Registration
            </h2>
            <p className="text-gray-600 mt-2">
              Register ID for user voting register eligibility
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* NID Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NID Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="nidNumber"
                  value={NIDFormData.nidNumber}
                  onChange={(e) => NIDFormChange("nidNumber", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter NID number"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <img src="/icon/NIDnumber.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={NIDFormData.name}
                  onChange={(e) => NIDFormChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter full name"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <img src="/icon/NIDname.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Message Display */}
            {message.text && (
              <div
                className={`p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    {message.type === "success" ? (
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-red-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{message.text}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Registering...
                </div>
              ) : (
                "Register NID"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNID;
