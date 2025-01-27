import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { motion } from "framer-motion";
import {
  FaUser,
  FaLock,
  FaBell,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaBuilding,
  FaEdit,
  FaCamera,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGlobe,
  FaLanguage,
} from "react-icons/fa";

function Profile() {
  const [userData, setUserData] = useState({
    personalInfo: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+91 9876543210",
      alternatePhone: "",
      address: "123 Main Street",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500001",
      aadharNumber: "XXXX-XXXX-XXXX-1234",
      panNumber: "ABCDE1234F",
      dateOfBirth: "1990-01-01",
      gender: "male",
    },
    professionalInfo: {
      companyName: "ABC Constructions Pvt Ltd",
      designation: "Project Manager",
      experience: "8",
      department: "Construction",
      employeeId: "EMP001",
      joiningDate: "2020-01-01",
      workEmail: "john.d@abcconstructions.com",
    },
    preferences: {
      emailNotifications: true,
      smsNotifications: true,
      whatsappNotifications: false,
      language: "English",
      theme: "light",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal"); // personal, professional, security
  const [editedData, setEditedData] = useState(userData.personalInfo);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setUserData((prev) => ({
      ...prev,
      [activeTab === "personal" ? "personalInfo" : "professionalInfo"]:
        editedData,
    }));
    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Add password change logic here
    console.log("Password change requested");
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: checked,
      },
    }));
  };

  const renderPersonalInfoForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={
            isEditing ? editedData.fullName : userData.personalInfo.fullName
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={isEditing ? editedData.email : userData.personalInfo.email}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={isEditing ? editedData.phone : userData.personalInfo.phone}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Alternate Phone
        </label>
        <input
          type="tel"
          name="alternatePhone"
          value={
            isEditing
              ? editedData.alternatePhone
              : userData.personalInfo.alternatePhone
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <textarea
          name="address"
          value={isEditing ? editedData.address : userData.personalInfo.address}
          onChange={handleInputChange}
          disabled={!isEditing}
          rows="3"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          value={isEditing ? editedData.city : userData.personalInfo.city}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          State
        </label>
        <input
          type="text"
          name="state"
          value={isEditing ? editedData.state : userData.personalInfo.state}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pincode
        </label>
        <input
          type="text"
          name="pincode"
          value={isEditing ? editedData.pincode : userData.personalInfo.pincode}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={
            isEditing
              ? editedData.dateOfBirth
              : userData.personalInfo.dateOfBirth
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Aadhar Number
        </label>
        <input
          type="text"
          name="aadharNumber"
          value={
            isEditing
              ? editedData.aadharNumber
              : userData.personalInfo.aadharNumber
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          PAN Number
        </label>
        <input
          type="text"
          name="panNumber"
          value={
            isEditing ? editedData.panNumber : userData.personalInfo.panNumber
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );

  const renderProfessionalInfoForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          value={
            isEditing
              ? editedData.companyName
              : userData.professionalInfo.companyName
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Designation
        </label>
        <input
          type="text"
          name="designation"
          value={
            isEditing
              ? editedData.designation
              : userData.professionalInfo.designation
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Department
        </label>
        <input
          type="text"
          name="department"
          value={
            isEditing
              ? editedData.department
              : userData.professionalInfo.department
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Employee ID
        </label>
        <input
          type="text"
          name="employeeId"
          value={
            isEditing
              ? editedData.employeeId
              : userData.professionalInfo.employeeId
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Work Email
        </label>
        <input
          type="email"
          name="workEmail"
          value={
            isEditing
              ? editedData.workEmail
              : userData.professionalInfo.workEmail
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Experience (Years)
        </label>
        <input
          type="number"
          name="experience"
          value={
            isEditing
              ? editedData.experience
              : userData.professionalInfo.experience
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Joining Date
        </label>
        <input
          type="date"
          name="joiningDate"
          value={
            isEditing
              ? editedData.joiningDate
              : userData.professionalInfo.joiningDate
          }
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      {/* Change Password Section */}
      <div className="border-b pb-6">
        <h4 className="text-md font-semibold text-gray-800 mb-4">
          Change Password
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="border-b pb-6">
        <h4 className="text-md font-semibold text-gray-800 mb-4">
          Two-Factor Authentication
        </h4>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">
              Add an extra layer of security to your account
            </p>
            <p className="text-sm text-gray-500 mt-1">
              We'll send you a code to verify your identity when you sign in on
              a new device
            </p>
          </div>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            Enable 2FA
          </button>
        </div>
      </div>

      {/* Login History */}
      <div>
        <h4 className="text-md font-semibold text-gray-800 mb-4">
          Recent Login Activity
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Chrome on Windows
              </p>
              <p className="text-xs text-gray-500">Hyderabad, India</p>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Safari on iPhone
              </p>
              <p className="text-xs text-gray-500">Hyderabad, India</p>
            </div>
            <p className="text-sm text-gray-500">Yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Profile Management
          </h1>
          <p className="text-gray-600">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <FaUser className="text-gray-400 text-5xl" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                    <FaCamera />
                  </button>
                </div>
                <h2 className="mt-4 text-xl font-semibold">
                  {userData.personalInfo.fullName}
                </h2>
                <p className="text-gray-500 text-sm">
                  {userData.personalInfo.designation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === "personal"
                      ? "bg-green-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FaUser className="inline-block mr-2" />
                  Personal Info
                </button>
                <button
                  onClick={() => setActiveTab("professional")}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === "professional"
                      ? "bg-green-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FaBriefcase className="inline-block mr-2" />
                  Professional Info
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === "security"
                      ? "bg-green-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FaLock className="inline-block mr-2" />
                  Security
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {activeTab === "personal"
                    ? "Personal Information"
                    : activeTab === "professional"
                    ? "Professional Information"
                    : "Security Settings"}
                </h3>
                {activeTab !== "security" && (
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FaEdit className="text-xl" />
                  </button>
                )}
              </div>

              {activeTab === "personal" && renderPersonalInfoForm()}
              {activeTab === "professional" && renderProfessionalInfoForm()}
              {activeTab === "security" && renderSecuritySettings()}

              {isEditing && activeTab !== "security" && (
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MemberLayout>
  );
}

export default Profile;
