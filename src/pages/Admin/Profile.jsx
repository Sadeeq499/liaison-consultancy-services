import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdEdit,
  MdSave,
  MdLock,
  MdEmail,
  MdPhone,
  MdPerson,
  MdNotifications,
} from "react-icons/md";

function Profile() {
  // Profile Information
  const [profileInfo, setProfileInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@liaison.com",
    phone: "+1 (555) 123-4567",
    role: "Super Admin",
    department: "Administration",
    joinDate: "2023-01-15",
    lastLogin: "2024-03-15 09:30 AM",
  });

  // Edit States
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Password Change Form
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Mock API call to update profile
    setIsEditingProfile(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Mock API call to change password
    setIsChangingPassword(false);
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordFormChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={`https://ui-avatars.com/api/?name=${profileInfo.firstName}+${profileInfo.lastName}&size=128&background=6366f1&color=fff`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                    <MdEdit className="text-lg" />
                  </button>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  {profileInfo.firstName} {profileInfo.lastName}
                </h2>
                <p className="text-gray-500">{profileInfo.role}</p>
                <p className="text-sm text-gray-400">
                  Member since {profileInfo.joinDate}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MdEmail className="text-xl text-gray-400" />
                  <span>{profileInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MdPhone className="text-xl text-gray-400" />
                  <span>{profileInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MdPerson className="text-xl text-gray-400" />
                  <span>{profileInfo.department}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Profile Information
                </h2>
                <button
                  className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                >
                  <MdEdit />
                  {isEditingProfile ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              <form onSubmit={handleProfileUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={profileInfo.firstName}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={profileInfo.lastName}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={profileInfo.email}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={profileInfo.phone}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={profileInfo.department}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={profileInfo.role}
                      disabled
                    />
                  </div>
                </div>
                {isEditingProfile && (
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <MdSave />
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Password Change Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Change Password
                </h2>
                <button
                  className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
                  onClick={() => setIsChangingPassword(!isChangingPassword)}
                >
                  <MdLock />
                  {isChangingPassword ? "Cancel" : "Change Password"}
                </button>
              </div>

              {isChangingPassword && (
                <form onSubmit={handlePasswordChange}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        value={passwordForm.currentPassword}
                        onChange={handlePasswordFormChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        value={passwordForm.newPassword}
                        onChange={handlePasswordFormChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        value={passwordForm.confirmPassword}
                        onChange={handlePasswordFormChange}
                      />
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <MdSave />
                        Update Password
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MdNotifications className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">Last login</p>
                    <p className="text-sm text-gray-500">
                      {profileInfo.lastLogin}
                    </p>
                  </div>
                </div>
                {/* Add more activity items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Profile;
