import React, { useState } from "react";
import toast from "react-hot-toast";
import UserStore from "../../store/UserStote";

function NIDReg() {
  const { NIDRegFormData, NIDRegFormChange, NIDRegRequest } = UserStore();
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await NIDRegRequest(NIDRegFormData);
      if (response.success) {
        setMessage({ type: "success", text: response.message || "Request submitted successfully" });
        toast.success("Request sent successfully.");
      } else {
        setMessage({ type: "error", text: response.message || "Something went wrong!" });
        toast.error(response.message || "Failed to submit request");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Something went wrong!",
      });
      toast.error("Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-500">NID REGISTER REQUEST</h1>
          <p className="text-sm text-blue-500 mt-1">
            Please provide your NID details to submit a request
          </p>
        </div>

        {/* Success / Error Message */}
        {message.text && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm text-center ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={NIDRegFormData.email}
              onChange={(e) => NIDRegFormChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* NID Number */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              NID Number
            </label>
            <input
              type="text"
              name="nidNumber"
              value={NIDRegFormData.nidNumber}
              onChange={(e) => NIDRegFormChange("nidNumber", e.target.value)}
              placeholder="Enter your NID number"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={NIDRegFormData.name}
              onChange={(e) => NIDRegFormChange("name", e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NIDReg;