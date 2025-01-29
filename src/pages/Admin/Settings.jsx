import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdSave,
  MdNotifications,
  MdSecurity,
  MdLanguage,
  MdPalette,
  MdEmail,
  MdBackup,
} from "react-icons/md";

function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      newsletterSubscription: false,
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: "30",
      passwordExpiry: "90",
    },
    appearance: {
      language: "en",
      timezone: "UTC",
      dateFormat: "MM/DD/YYYY",
    },
    email: {
      emailServer: "smtp.liaison.com",
      emailPort: "587",
      senderEmail: "no-reply@liaison.com",
    },
    backup: {
      autoBackup: true,
      backupFrequency: "daily",
      retentionPeriod: "30",
    },
  });

  const handleSettingChange = (category, setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Mock API call to save settings
    console.log("Settings saved:", settings);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          System Settings
        </h1>

        <form onSubmit={handleSaveSettings} className="space-y-6">
          {/* Notifications Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <MdNotifications className="text-blue-500 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                Notification Preferences
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Email Notifications</label>
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) =>
                    handleSettingChange(
                      "notifications",
                      "emailNotifications",
                      e.target.checked
                    )
                  }
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Push Notifications</label>
                <input
                  type="checkbox"
                  checked={settings.notifications.pushNotifications}
                  onChange={(e) =>
                    handleSettingChange(
                      "notifications",
                      "pushNotifications",
                      e.target.checked
                    )
                  }
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Newsletter Subscription</label>
                <input
                  type="checkbox"
                  checked={settings.notifications.newsletterSubscription}
                  onChange={(e) =>
                    handleSettingChange(
                      "notifications",
                      "newsletterSubscription",
                      e.target.checked
                    )
                  }
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <MdSecurity className="text-blue-500 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                Security Settings
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">
                  Two-Factor Authentication
                </label>
                <input
                  type="checkbox"
                  checked={settings.security.twoFactorAuth}
                  onChange={(e) =>
                    handleSettingChange(
                      "security",
                      "twoFactorAuth",
                      e.target.checked
                    )
                  }
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-700">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  value={settings.security.sessionTimeout}
                  onChange={(e) =>
                    handleSettingChange(
                      "security",
                      "sessionTimeout",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="text-gray-700">Password Expiry (days)</label>
                <input
                  type="number"
                  value={settings.security.passwordExpiry}
                  onChange={(e) =>
                    handleSettingChange(
                      "security",
                      "passwordExpiry",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <MdLanguage className="text-blue-500 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                System Preferences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">Language</label>
                <select
                  value={settings.appearance.language}
                  onChange={(e) =>
                    handleSettingChange(
                      "appearance",
                      "language",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700">Timezone</label>
                <select
                  value={settings.appearance.timezone}
                  onChange={(e) =>
                    handleSettingChange(
                      "appearance",
                      "timezone",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700">Date Format</label>
                <select
                  value={settings.appearance.dateFormat}
                  onChange={(e) =>
                    handleSettingChange(
                      "appearance",
                      "dateFormat",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Email Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <MdEmail className="text-blue-500 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                Email Configuration
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">SMTP Server</label>
                <input
                  type="text"
                  value={settings.email.emailServer}
                  onChange={(e) =>
                    handleSettingChange("email", "emailServer", e.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="text-gray-700">SMTP Port</label>
                <input
                  type="text"
                  value={settings.email.emailPort}
                  onChange={(e) =>
                    handleSettingChange("email", "emailPort", e.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-gray-700">Sender Email</label>
                <input
                  type="email"
                  value={settings.email.senderEmail}
                  onChange={(e) =>
                    handleSettingChange("email", "senderEmail", e.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>

          {/* Backup Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <MdBackup className="text-blue-500 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                Backup Settings
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Automatic Backup</label>
                <input
                  type="checkbox"
                  checked={settings.backup.autoBackup}
                  onChange={(e) =>
                    handleSettingChange(
                      "backup",
                      "autoBackup",
                      e.target.checked
                    )
                  }
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-700">Backup Frequency</label>
                <select
                  value={settings.backup.backupFrequency}
                  onChange={(e) =>
                    handleSettingChange(
                      "backup",
                      "backupFrequency",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700">Retention Period (days)</label>
                <input
                  type="number"
                  value={settings.backup.retentionPeriod}
                  onChange={(e) =>
                    handleSettingChange(
                      "backup",
                      "retentionPeriod",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              <MdSave />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default Settings;
