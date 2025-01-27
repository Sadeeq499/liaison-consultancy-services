import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUpload, FaTrash, FaSpinner, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import MemberLayout from "../../../layouts/member/MemberLayout";
import { services } from "../../../services/servicesData";

function ServicesRequestForm() {
  const { serviceId } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState([]);

  const [formData, setFormData] = useState({
    // Property Details
    propertyAddress: "",
    surveyNumber: "",
    propertyType: "",
    landArea: "",

    // Service Details
    requestType: "",
    description: "",
    preferredDate: "",
    urgencyLevel: "normal",

    // Required Documents
    documents: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form Data:", formData);
      console.log("Files:", files);
      // Reset form after successful submission
      setFormData({
        propertyAddress: "",
        surveyNumber: "",
        propertyType: "",
        landArea: "",
        requestType: "",
        description: "",
        preferredDate: "",
        urgencyLevel: "normal",
        documents: [],
      });
      setFiles([]);
      alert("Service request submitted successfully!");
    } catch (error) {
      alert("Error submitting request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get service details including required documents
  const getServiceDetails = () => {
    const decodedTitle = decodeURIComponent(serviceId);
    return (
      services.find(
        (service) => service.title.toLowerCase() === decodedTitle.toLowerCase()
      ) || null
    );
  };

  const serviceDetails = getServiceDetails();

  // Determine required documents based on service type
  const getRequiredDocuments = () => {
    if (!serviceDetails) return [];

    const commonDocs = ["Property ownership document", "Identity proof"];
    const serviceDocs = serviceDetails.keyPoints || [];

    return [...commonDocs, ...serviceDocs];
  };

  if (!serviceDetails) {
    return (
      <MemberLayout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-red-600">
              Service Not Found
            </h2>
            <p className="text-gray-600 mt-2">
              The requested service could not be found.
            </p>
            <Link
              to="/member/services"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold mt-4"
            >
              <FaArrowLeft /> Back to Services
            </Link>
          </div>
        </div>
      </MemberLayout>
    );
  }

  return (
    <MemberLayout>
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="mb-6">
            <Link
              to="/member/services"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold mb-4"
            >
              <FaArrowLeft /> Back to Services
            </Link>
            <h2 className="text-2xl font-bold text-gray-800">
              Request Service
            </h2>
            {serviceDetails && (
              <>
                <p className="text-gray-600 mt-2">
                  Service: {serviceDetails.title}
                </p>
                <p className="text-gray-500 mt-1">
                  {serviceDetails.description}
                </p>
              </>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Details Section */}
            <section>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Property Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <textarea
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Survey Number
                  </label>
                  <input
                    type="text"
                    name="surveyNumber"
                    value={formData.surveyNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Land Area (in sq. ft)
                  </label>
                  <input
                    type="number"
                    name="landArea"
                    value={formData.landArea}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Required Documents Section */}
            <section>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Required Documents
              </h3>
              <div className="mb-4">
                <ul className="list-disc list-inside text-gray-600">
                  {getRequiredDocuments().map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>

              {/* Document Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <FaUpload className="text-4xl text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">
                    Drag and drop files here or
                  </p>
                  <label className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Browse Files
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                      >
                        <span className="text-sm text-gray-600">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-green-300"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Reset
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </MemberLayout>
  );
}

export default ServicesRequestForm;
