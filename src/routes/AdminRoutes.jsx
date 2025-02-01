import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import Members from "../pages/Admin/Members";
import Requests from "../pages/Admin/Requests";
import Documents from "../pages/Admin/Documents";
import Notifications from "../pages/Admin/Notifications";
import Analytics from "../pages/Admin/Analytics";
import Support from "../pages/Admin/Support";
import Settings from "../pages/Admin/Settings";
import Profile from "../pages/Admin/Profile";
import ServicesManagement from "../pages/Admin/ServicesManagement";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/members" element={<Members />} />
      <Route path="/admin/requests" element={<Requests />} />
      <Route path="/admin/documents" element={<Documents />} />
      <Route path="/admin/notifications" element={<Notifications />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/support" element={<Support />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/profile" element={<Profile />} />
      <Route path="/admin/services" element={<ServicesManagement />} />
    </Routes>
  );
}

export default AdminRoutes;
