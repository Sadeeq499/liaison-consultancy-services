import WebsiteRoutes from "./routes/WebsiteRoutes";
import MemberRoutes from "./routes/MemberRoutes";
import AdminRoutes from "./routes/AdminRoutes";

export default function App() {
  return (
    <>
      <WebsiteRoutes />
      <MemberRoutes />
      <AdminRoutes />
    </>
  );
}
